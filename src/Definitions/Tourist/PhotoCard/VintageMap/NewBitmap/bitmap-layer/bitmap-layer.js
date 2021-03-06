import { Layer, project32, picking } from '@deck.gl/core';
import { Model, Geometry, Texture2D } from '@luma.gl/core';
import vs from './bitmap-layer-vertex';
import fs from './bitmap-layer-fragment';
const DEFAULT_TEXTURE_PARAMETERS = {
  [10241]: 9987,
  [10240]: 9729,
  [10242]: 33071,
  [10243]: 33071
};
const defaultProps = {
  image: {
    type: 'object',
    value: null,
    async: true
  },
  bounds: {
    type: 'array',
    value: [1, 0, 0, 1],
    compare: true
  },
  desaturate: {
    type: 'number',
    min: 0,
    max: 1,
    value: 0
  },
  transparentColor: {
    type: 'color',
    value: [0, 0, 0, 0]
  },
  tintColor: {
    type: 'color',
    value: [255, 255, 255]
  }
};
export default class BitmapLayer extends Layer {
  getShaders() {
    return super.getShaders({
      vs,
      fs,
      modules: [project32, picking]
    });
  }

  initializeState() {
    const attributeManager = this.getAttributeManager();
    attributeManager.add({
      positions: {
        size: 3,
        type: 5130,
        fp64: this.use64bitPositions(),
        update: this.calculatePositions,
        noAlloc: true
      }
    });
    this.setState({
      numInstances: 1,
      positions: new Float64Array(12)
    });
  }

  updateState({
                props,
                oldProps,
                changeFlags
              }) {
    if (changeFlags.extensionsChanged) {
      const {
        gl
      } = this.context;

      if (this.state.model) {
        this.state.model.delete();
      }

      this.setState({
        model: this._getModel(gl)
      });
      this.getAttributeManager().invalidateAll();
    }

    if (props.image !== oldProps.image) {
      this.loadTexture(props.image);
    }

    const attributeManager = this.getAttributeManager();

    if (props.bounds !== oldProps.bounds) {
      attributeManager.invalidate('positions');
    }
  }

  finalizeState() {
    super.finalizeState();

    if (this.state.bitmapTexture) {
      this.state.bitmapTexture.delete();
    }
  }

  calculatePositions(attributes) {
    const {
      positions
    } = this.state;
    const {
      bounds
    } = this.props;

    if (Number.isFinite(bounds[0])) {
      positions[0] = bounds[0];
      positions[1] = bounds[1];
      positions[2] = 0;
      positions[3] = bounds[0];
      positions[4] = bounds[3];
      positions[5] = 0;
      positions[6] = bounds[2];
      positions[7] = bounds[3];
      positions[8] = 0;
      positions[9] = bounds[2];
      positions[10] = bounds[1];
      positions[11] = 0;
    } else {
      for (let i = 0; i < bounds.length; i++) {
        positions[i * 3 + 0] = bounds[i][0];
        positions[i * 3 + 1] = bounds[i][1];
        positions[i * 3 + 2] = bounds[i][2] || 0;
      }
    }

    attributes.value = positions;
  }

  _getModel(gl) {
    if (!gl) {
      return null;
    }

    return new Model(gl, Object.assign({}, this.getShaders(), {
      id: this.props.id,
      geometry: new Geometry({
        drawMode: 6,
        vertexCount: 4,
        attributes: {
          texCoords: new Float32Array([0, 1, 0, 0, 1, 0, 1, 1])
        }
      }),
      isInstanced: false
    }));
  }

  draw(opts) {
    const {
      uniforms
    } = opts;
    const {
      bitmapTexture,
      model
    } = this.state;
    const {
      image,
      desaturate,
      transparentColor,
      tintColor
    } = this.props;

    if (bitmapTexture && image instanceof HTMLVideoElement && image.readyState > HTMLVideoElement.HAVE_METADATA) {
      const sizeChanged = bitmapTexture.width !== image.videoWidth || bitmapTexture.height !== image.videoHeight;

      if (sizeChanged) {
        bitmapTexture.resize({
          width: image.videoWidth,
          height: image.videoHeight,
          mipmaps: true
        });
        bitmapTexture.setSubImageData({
          data: image,
          paramters: DEFAULT_TEXTURE_PARAMETERS
        });
      } else {
        bitmapTexture.setSubImageData({
          data: image
        });
      }

      bitmapTexture.generateMipmap();
    }

    if (bitmapTexture) {

      // console.log("image.width");
      // console.log(image.width);
      // console.log(image.height);

      bitmapTexture.resize({
        width: image.width,
        height: image.height,
        mipmaps: true
      });

      bitmapTexture.setSubImageData({
        data: image,
        parameters: DEFAULT_TEXTURE_PARAMETERS
      });

      bitmapTexture.generateMipmap();
    }

    if (bitmapTexture && model) {
      model.setUniforms(Object.assign({}, uniforms, {
        bitmapTexture,
        desaturate,
        transparentColor: transparentColor.map(x => x / 255),
        tintColor: tintColor.slice(0, 3).map(x => x / 255)
      })).draw();
    }
  }

  loadTexture(image) {
    const {
      gl
    } = this.context;

    if (this.state.bitmapTexture) {
      this.state.bitmapTexture.delete();
    }

    if (image instanceof Texture2D) {
      this.setState({
        bitmapTexture: image
      });
    } else if (image instanceof HTMLVideoElement) {
      this.setState({
        bitmapTexture: new Texture2D(gl, {
          width: 1,
          height: 1,
          parameters: DEFAULT_TEXTURE_PARAMETERS,
          mipmaps: false
        })
      });
    } else if (image) {
      this.setState({
        bitmapTexture: new Texture2D(gl, {
          data: image,
          parameters: DEFAULT_TEXTURE_PARAMETERS
        })
      });
    }
  }

}
BitmapLayer.layerName = 'BitmapLayer';
BitmapLayer.defaultProps = defaultProps;
//# sourceMappingURL=bitmap-layer.js.map
