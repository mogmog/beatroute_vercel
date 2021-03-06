import { Layer, project32, picking } from '@deck.gl/core';
import { Model, Geometry, Texture2D } from '@luma.gl/core';
import createMesh from './create-mesh';
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
        attributeManager.remove(['instancePickingColors']);
        const noAlloc = true;
        attributeManager.add({
            indices: {
                size: 1,
                isIndexed: true,
                update: attribute => attribute.value = this.state.mesh.indices,
                noAlloc
            },
            positions: {
                size: 3,
                type: 5130,
                fp64: this.use64bitPositions(),
                update: attribute => attribute.value = this.state.mesh.positions,
                noAlloc
            },
            texCoords: {
                size: 2,
                update: attribute => attribute.value = this.state.mesh.texCoords,
                noAlloc
            }
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
            const oldMesh = this.state.mesh;

            const mesh = this._createMesh();

            this.state.model.setVertexCount(mesh.vertexCount);

            for (const key in mesh) {
                if (oldMesh && oldMesh[key] !== mesh[key]) {
                    attributeManager.invalidate(key);
                }
            }

            this.setState({
                mesh
            });
        }
    }

    finalizeState() {
        super.finalizeState();

        if (this.state.bitmapTexture) {
            this.state.bitmapTexture.delete();
        }
    }

    _createMesh() {
        const {
            bounds
        } = this.props;
        let normalizedBounds = bounds;

        if (Number.isFinite(bounds[0])) {
            normalizedBounds = [[bounds[0], bounds[1]], [bounds[0], bounds[3]], [bounds[2], bounds[3]], [bounds[2], bounds[1]]];
        }

        return createMesh(normalizedBounds, this.context.viewport.resolution);
    }

    _getModel(gl) {
        if (!gl) {
            return null;
        }

        return new Model(gl, Object.assign({}, this.getShaders(), {
            id: this.props.id,
            geometry: new Geometry({
                drawMode: 4,
                vertexCount: 6
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
