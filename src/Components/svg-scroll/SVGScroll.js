import React, {useEffect} from 'react';
import {gsap} from "gsap";

import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';

import './style.css'

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

const SVGScroll = () => {
    useEffect(() => {
        gsap.defaults({ease: "none"});

       // gsap.set(".ball", {xPercent: -50, yPercent: -50})


          //  .to(".ball02, .text01", {}, 0.2)
          //  .to(".ball03, .text02", {}, 0.33)
          //  .to(".ball04, .text03", {}, 0.46)

        gsap.timeline({
            defaults: {},
            scrollTrigger: {
                trigger: "#svg-scroll",
                scrub: true,
                start: "top center",
                end: "bottom center"
            }
        })
           // .to(".ball01", {duration: 0.01, autoAlpha: 1})
            .from(".theLine", {drawSVG: 0, duration: 3}, 0)
           // .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
           // .add(tl, 0);

    }, []);

    return (
        <div className="App-section">
            <h2>Scroll</h2>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="409.59375" width="409.59375"><path d="M 57.81 43.81 C 57.81 43.81 57.81 44.01 57.81 43.81 C 57.81 43.61 57.81 43.01 57.81 42.81 C 57.81 42.61 57.81 42.81 57.81 42.81 C 57.81 42.81 58.01 43.01 57.81 42.81 C 57.61 42.61 57.01 42.01 56.81 41.81 C 56.61 41.61 57.21 41.81 56.81 41.81 C 56.41 41.81 55.61 41.61 54.81 41.81 C 54.01 42.01 53.61 42.41 52.81 42.81 C 52.01 43.21 51.81 43.21 50.81 43.81 C 49.81 44.41 48.81 45.01 47.81 45.81 C 46.81 46.61 46.81 46.61 45.81 47.81 C 44.81 49.01 43.41 50.41 42.81 51.81 C 42.21 53.21 43.01 53.41 42.81 54.81 C 42.61 56.21 41.61 57.81 41.81 58.81 C 42.01 59.81 42.81 59.21 43.81 59.81 C 44.81 60.41 45.41 61.61 46.81 61.81 C 48.21 62.01 49.21 62.21 50.81 60.81 C 52.41 59.41 53.81 57.01 54.81 54.81 C 55.81 52.61 55.61 51.41 55.81 49.81 C 56.01 48.21 56.01 47.81 55.81 46.81 C 55.61 45.81 55.21 45.21 54.81 44.81 C 54.41 44.41 54.01 44.21 53.81 44.81 C 53.61 45.41 53.81 46.41 53.81 47.81 C 53.81 49.21 53.81 50.01 53.81 51.81 C 53.81 53.61 53.81 55.41 53.81 56.81 C 53.81 58.21 53.41 58.01 53.81 58.81 C 54.21 59.61 55.41 60.41 55.81 60.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 64.81 32.81 C 64.81 32.41 64.81 31.61 64.81 30.81 C 64.81 30.01 64.21 29.41 64.81 28.81 C 65.41 28.21 67.01 28.21 67.81 27.81 C 68.61 27.41 68.21 27.01 68.81 26.81 C 69.41 26.61 70.21 26.81 70.81 26.81 C 71.41 26.81 71.41 26.41 71.81 26.81 C 72.21 27.21 72.61 28.21 72.81 28.81 C 73.01 29.41 72.81 29.21 72.81 29.81 C 72.81 30.41 73.01 31.01 72.81 31.81 C 72.61 32.61 72.41 32.81 71.81 33.81 C 71.21 34.81 70.21 35.81 69.81 36.81 C 69.41 37.81 69.81 38.01 69.81 38.81 C 69.81 39.61 69.81 40.41 69.81 40.81 C 69.81 41.21 69.41 40.81 69.81 40.81 C 70.21 40.81 71.01 40.81 71.81 40.81 C 72.61 40.81 73.41 40.81 73.81 40.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 103.81 36.81 C 103.81 36.61 104.01 35.41 103.81 35.81 C 103.61 36.21 103.21 37.61 102.81 38.81 C 102.41 40.01 102.21 40.01 101.81 41.81 C 101.41 43.61 101.01 45.81 100.81 47.81 C 100.61 49.81 100.81 50.41 100.81 51.81 C 100.81 53.21 100.81 53.61 100.81 54.81 C 100.81 56.01 100.81 57.21 100.81 57.81 C 100.81 58.41 100.81 57.81 100.81 57.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 91.81 49.81 C 91.81 49.81 91.21 50.01 91.81 49.81 C 92.41 49.61 93.41 49.21 94.81 48.81 C 96.21 48.41 97.01 48.21 98.81 47.81 C 100.61 47.41 101.81 47.01 103.81 46.81 C 105.81 46.61 107.81 46.81 108.81 46.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 128.81 28.81 C 128.81 28.81 128.81 28.61 128.81 28.81 C 128.81 29.01 128.81 29.41 128.81 29.81 C 128.81 30.21 129.01 29.61 128.81 30.81 C 128.61 32.01 128.01 34.21 127.81 35.81 C 127.61 37.41 127.81 37.01 127.81 38.81 C 127.81 40.61 127.81 43.01 127.81 44.81 C 127.81 46.61 127.81 46.41 127.81 47.81 C 127.81 49.21 127.81 50.61 127.81 51.81 C 127.81 53.01 127.81 53.21 127.81 53.81 C 127.81 54.41 127.81 54.61 127.81 54.81 C 127.81 55.01 127.61 55.01 127.81 54.81 C 128.01 54.61 128.41 54.41 128.81 53.81 C 129.21 53.21 129.21 52.81 129.81 51.81 C 130.41 50.81 131.21 49.61 131.81 48.81 C 132.41 48.01 132.41 48.01 132.81 47.81 C 133.21 47.61 133.41 47.81 133.81 47.81 C 134.21 47.81 134.41 47.81 134.81 47.81 C 135.21 47.81 135.41 47.81 135.81 47.81 C 136.21 47.81 136.41 47.41 136.81 47.81 C 137.21 48.21 137.41 49.01 137.81 49.81 C 138.21 50.61 138.41 50.61 138.81 51.81 C 139.21 53.01 139.61 54.21 139.81 55.81 C 140.01 57.41 139.81 58.61 139.81 59.81 C 139.81 61.01 139.81 61.21 139.81 61.81 C 139.81 62.41 140.61 62.41 139.81 62.81 C 139.01 63.21 137.41 63.61 135.81 63.81 C 134.21 64.01 133.41 64.21 131.81 63.81 C 130.21 63.41 128.61 62.21 127.81 61.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 139.81 25.81 C 140.01 25.41 140.21 24.41 140.81 23.81 C 141.41 23.21 141.81 23.21 142.81 22.81 C 143.81 22.41 144.81 22.01 145.81 21.81 C 146.81 21.61 147.01 21.61 147.81 21.81 C 148.61 22.01 149.41 22.41 149.81 22.81 C 150.21 23.21 149.61 23.21 149.81 23.81 C 150.01 24.41 150.81 24.81 150.81 25.81 C 150.81 26.81 150.41 27.61 149.81 28.81 C 149.21 30.01 148.41 30.81 147.81 31.81 C 147.21 32.81 147.01 33.21 146.81 33.81 C 146.61 34.41 146.81 34.41 146.81 34.81 C 146.81 35.21 146.81 35.41 146.81 35.81 C 146.81 36.21 146.61 36.41 146.81 36.81 C 147.01 37.21 146.61 37.61 147.81 37.81 C 149.01 38.01 151.81 37.81 152.81 37.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 176.81 41.81 C 176.81 41.81 176.41 41.81 176.81 41.81 C 177.21 41.81 178.01 41.81 178.81 41.81 C 179.61 41.81 179.81 41.81 180.81 41.81 C 181.81 41.81 182.41 42.01 183.81 41.81 C 185.21 41.61 187.01 41.01 187.81 40.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 168.81 55.81 C 168.81 55.81 168.61 55.81 168.81 55.81 C 169.01 55.81 168.81 55.81 169.81 55.81 C 170.81 55.81 171.81 55.61 173.81 55.81 C 175.81 56.01 178.61 56.61 179.81 56.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 218.81 40.81 C 218.81 40.81 219.01 40.81 218.81 40.81 C 218.61 40.81 218.21 40.81 217.81 40.81 C 217.41 40.81 217.41 40.81 216.81 40.81 C 216.21 40.81 215.61 40.41 214.81 40.81 C 214.01 41.21 213.61 42.01 212.81 42.81 C 212.01 43.61 211.61 43.81 210.81 44.81 C 210.01 45.81 209.41 46.01 208.81 47.81 C 208.21 49.61 207.81 52.01 207.81 53.81 C 207.81 55.61 207.61 55.81 208.81 56.81 C 210.01 57.81 211.41 58.41 213.81 58.81 C 216.21 59.21 219.41 58.81 220.81 58.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 228.81 22.81 C 228.81 22.81 228.61 23.01 228.81 22.81 C 229.01 22.61 229.21 22.21 229.81 21.81 C 230.41 21.41 230.61 21.01 231.81 20.81 C 233.01 20.61 234.21 20.81 235.81 20.81 C 237.41 20.81 238.61 20.81 239.81 20.81 C 241.01 20.81 241.21 20.61 241.81 20.81 C 242.41 21.01 242.81 21.01 242.81 21.81 C 242.81 22.61 242.41 23.81 241.81 24.81 C 241.21 25.81 240.61 25.81 239.81 26.81 C 239.01 27.81 238.41 28.81 237.81 29.81 C 237.21 30.81 237.21 30.81 236.81 31.81 C 236.41 32.81 236.01 33.81 235.81 34.81 C 235.61 35.81 235.41 36.21 235.81 36.81 C 236.21 37.41 236.81 37.61 237.81 37.81 C 238.81 38.01 238.61 37.81 240.81 37.81 C 243.01 37.81 247.21 37.81 248.81 37.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 32.81 138.81 C 32.81 138.61 32.81 138.01 32.81 137.81 C 32.81 137.61 32.81 137.81 32.81 137.81 C 32.81 137.81 32.81 137.81 32.81 137.81 C 32.81 137.81 32.81 137.81 32.81 137.81 C 32.81 137.81 33.01 137.21 32.81 137.81 C 32.61 138.41 32.01 139.81 31.81 140.81 C 31.61 141.81 31.81 141.41 31.81 142.81 C 31.81 144.21 31.81 146.01 31.81 147.81 C 31.81 149.61 31.61 150.21 31.81 151.81 C 32.01 153.41 32.21 154.41 32.81 155.81 C 33.41 157.21 34.21 157.81 34.81 158.81 C 35.41 159.81 35.01 160.01 35.81 160.81 C 36.61 161.61 37.81 162.41 38.81 162.81 C 39.81 163.21 39.61 163.01 40.81 162.81 C 42.01 162.61 43.41 162.61 44.81 161.81 C 46.21 161.01 46.41 160.01 47.81 158.81 C 49.21 157.61 50.21 157.81 51.81 155.81 C 53.41 153.81 54.61 152.21 55.81 148.81 C 57.01 145.41 57.41 141.81 57.81 138.81 C 58.21 135.81 57.81 135.61 57.81 133.81 C 57.81 132.01 57.81 130.61 57.81 129.81 C 57.81 129.01 57.81 129.81 57.81 129.81 C 57.81 129.81 57.81 129.81 57.81 129.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 48.81 146.81 C 48.81 146.81 48.81 146.81 48.81 146.81 C 48.81 146.81 49.01 146.61 48.81 146.81 C 48.61 147.01 48.01 146.81 47.81 147.81 C 47.61 148.81 48.01 150.01 47.81 151.81 C 47.61 153.61 47.01 154.01 46.81 156.81 C 46.61 159.61 46.61 163.01 46.81 165.81 C 47.01 168.61 47.21 168.81 47.81 170.81 C 48.41 172.81 49.41 174.81 49.81 175.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 67.81 117.81 C 67.81 117.61 67.81 117.01 67.81 116.81 C 67.81 116.61 67.81 116.81 67.81 116.81 C 67.81 116.81 67.41 117.01 67.81 116.81 C 68.21 116.61 68.81 116.01 69.81 115.81 C 70.81 115.61 71.81 115.81 72.81 115.81 C 73.81 115.81 73.81 115.61 74.81 115.81 C 75.81 116.01 77.01 116.41 77.81 116.81 C 78.61 117.21 78.61 117.21 78.81 117.81 C 79.01 118.41 79.01 119.21 78.81 119.81 C 78.61 120.41 78.41 120.21 77.81 120.81 C 77.21 121.41 76.21 122.41 75.81 122.81 C 75.41 123.21 75.61 122.81 75.81 122.81 C 76.01 122.81 76.41 122.61 76.81 122.81 C 77.21 123.01 77.01 123.41 77.81 123.81 C 78.61 124.21 80.01 124.21 80.81 124.81 C 81.61 125.41 81.21 125.81 81.81 126.81 C 82.41 127.81 83.41 129.01 83.81 129.81 C 84.21 130.61 83.81 130.41 83.81 130.81 C 83.81 131.21 83.81 131.41 83.81 131.81 C 83.81 132.21 84.61 132.41 83.81 132.81 C 83.01 133.21 81.41 133.61 79.81 133.81 C 78.21 134.01 77.01 133.61 75.81 133.81 C 74.61 134.01 74.21 134.61 73.81 134.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 110.81 139.81 C 110.81 139.81 111.01 139.61 110.81 139.81 C 110.61 140.01 110.01 139.81 109.81 140.81 C 109.61 141.81 109.81 142.81 109.81 144.81 C 109.81 146.81 109.81 148.81 109.81 150.81 C 109.81 152.81 109.61 153.01 109.81 154.81 C 110.01 156.61 110.61 158.41 110.81 159.81 C 111.01 161.21 110.81 161.01 110.81 161.81 C 110.81 162.61 110.81 163.41 110.81 163.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 102.81 154.81 C 102.81 154.81 102.41 155.01 102.81 154.81 C 103.21 154.61 103.41 154.01 104.81 153.81 C 106.21 153.61 108.01 154.01 109.81 153.81 C 111.61 153.61 111.41 153.61 113.81 152.81 C 116.21 152.01 120.21 150.41 121.81 149.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 164.81 126.81 C 164.61 126.61 164.21 126.01 163.81 125.81 C 163.41 125.61 163.21 126.01 162.81 125.81 C 162.41 125.61 162.41 125.01 161.81 124.81 C 161.21 124.61 161.01 124.21 159.81 124.81 C 158.61 125.41 157.01 126.61 155.81 127.81 C 154.61 129.01 154.81 129.01 153.81 130.81 C 152.81 132.61 151.81 134.61 150.81 136.81 C 149.81 139.01 149.41 139.61 148.81 141.81 C 148.21 144.01 148.01 145.81 147.81 147.81 C 147.61 149.81 147.61 150.01 147.81 151.81 C 148.01 153.61 148.01 155.41 148.81 156.81 C 149.61 158.21 150.21 158.41 151.81 158.81 C 153.41 159.21 155.01 159.21 156.81 158.81 C 158.61 158.41 159.01 158.21 160.81 156.81 C 162.61 155.41 164.21 153.81 165.81 151.81 C 167.41 149.81 167.61 149.41 168.81 146.81 C 170.01 144.21 171.21 141.61 171.81 138.81 C 172.41 136.01 172.21 135.41 171.81 132.81 C 171.41 130.21 170.41 127.81 169.81 125.81 C 169.21 123.81 169.41 123.81 168.81 122.81 C 168.21 121.81 167.21 121.21 166.81 120.81 C 166.41 120.41 167.21 120.61 166.81 120.81 C 166.41 121.01 165.41 121.01 164.81 121.81 C 164.21 122.61 164.41 123.41 163.81 124.81 C 163.21 126.21 162.41 127.41 161.81 128.81 C 161.21 130.21 161.21 129.81 160.81 131.81 C 160.41 133.81 160.01 136.41 159.81 138.81 C 159.61 141.21 160.01 141.21 159.81 143.81 C 159.61 146.41 159.01 149.21 158.81 151.81 C 158.61 154.41 158.81 154.41 158.81 156.81 C 158.81 159.21 158.61 161.41 158.81 163.81 C 159.01 166.21 159.01 166.21 159.81 168.81 C 160.61 171.41 161.61 174.01 162.81 176.81 C 164.01 179.61 164.21 180.41 165.81 182.81 C 167.41 185.21 168.81 187.41 170.81 188.81 C 172.81 190.21 174.81 189.61 175.81 189.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 182.81 113.81 C 182.81 113.81 182.81 113.81 182.81 113.81 C 182.81 113.81 182.81 113.61 182.81 113.81 C 182.81 114.01 182.81 114.41 182.81 114.81 C 182.81 115.21 182.81 115.41 182.81 115.81 C 182.81 116.21 182.81 116.21 182.81 116.81 C 182.81 117.41 182.81 118.21 182.81 118.81 C 182.81 119.41 182.81 119.61 182.81 119.81 C 182.81 120.01 182.81 119.81 182.81 119.81 C 182.81 119.81 182.81 119.81 182.81 119.81 C 182.81 119.81 182.81 119.81 182.81 119.81 C 182.81 119.81 182.81 120.21 182.81 119.81 C 182.81 119.41 182.81 118.81 182.81 117.81 C 182.81 116.81 182.61 115.81 182.81 114.81 C 183.01 113.81 183.41 113.41 183.81 112.81 C 184.21 112.21 184.21 112.41 184.81 111.81 C 185.41 111.21 186.21 110.61 186.81 109.81 C 187.41 109.01 187.41 108.21 187.81 107.81 C 188.21 107.41 188.61 107.81 188.81 107.81 C 189.01 107.81 188.61 107.61 188.81 107.81 C 189.01 108.01 189.41 108.21 189.81 108.81 C 190.21 109.41 190.41 110.01 190.81 110.81 C 191.21 111.61 191.41 112.01 191.81 112.81 C 192.21 113.61 192.61 114.01 192.81 114.81 C 193.01 115.61 192.81 116.41 192.81 116.81 C 192.81 117.21 192.81 116.81 192.81 116.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 172.81 96.81 C 172.81 96.81 173.01 96.61 172.81 96.81 C 172.61 97.01 172.41 96.81 171.81 97.81 C 171.21 98.81 170.21 100.41 169.81 101.81 C 169.41 103.21 170.01 103.41 169.81 104.81 C 169.61 106.21 169.01 106.81 168.81 108.81 C 168.61 110.81 168.61 113.01 168.81 114.81 C 169.01 116.61 169.01 116.41 169.81 117.81 C 170.61 119.21 172.21 121.01 172.81 121.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 204.81 94.81 C 204.81 95.01 204.81 95.21 204.81 95.81 C 204.81 96.41 204.61 96.81 204.81 97.81 C 205.01 98.81 205.41 99.41 205.81 100.81 C 206.21 102.21 206.61 102.41 206.81 104.81 C 207.01 107.21 206.81 110.41 206.81 112.81 C 206.81 115.21 207.21 114.81 206.81 116.81 C 206.41 118.81 205.81 121.01 204.81 122.81 C 203.81 124.61 202.41 125.21 201.81 125.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 131.81 211.81 C 131.81 211.81 131.41 211.81 131.81 211.81 C 132.21 211.81 132.81 211.81 133.81 211.81 C 134.81 211.81 134.41 211.81 136.81 211.81 C 139.21 211.81 141.61 212.01 145.81 211.81 C 150.01 211.61 150.61 211.81 157.81 210.81 C 165.01 209.81 174.01 208.21 181.81 206.81 C 189.61 205.41 190.41 204.81 196.81 203.81 C 203.21 202.81 209.21 202.41 213.81 201.81 C 218.41 201.21 218.61 201.01 219.81 200.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 179.81 224.81 C 179.81 224.61 180.01 224.01 179.81 223.81 C 179.61 223.61 179.01 224.01 178.81 223.81 C 178.61 223.61 179.41 222.81 178.81 222.81 C 178.21 222.81 176.81 223.21 175.81 223.81 C 174.81 224.41 174.81 224.81 173.81 225.81 C 172.81 226.81 172.01 227.01 170.81 228.81 C 169.61 230.61 168.81 232.61 167.81 234.81 C 166.81 237.01 166.21 238.21 165.81 239.81 C 165.41 241.41 165.61 242.01 165.81 242.81 C 166.01 243.61 165.61 244.01 166.81 243.81 C 168.01 243.61 170.01 242.81 171.81 241.81 C 173.61 240.81 174.21 240.41 175.81 238.81 C 177.41 237.21 178.81 235.61 179.81 233.81 C 180.81 232.01 180.61 231.41 180.81 229.81 C 181.01 228.21 180.81 226.81 180.81 225.81 C 180.81 224.81 180.81 225.01 180.81 224.81 C 180.81 224.61 180.81 224.81 180.81 224.81 C 180.81 224.81 180.81 224.81 180.81 224.81 C 180.81 224.81 180.81 224.41 180.81 224.81 C 180.81 225.21 181.01 226.21 180.81 226.81 C 180.61 227.41 180.01 227.21 179.81 227.81 C 179.61 228.41 180.01 228.61 179.81 229.81 C 179.61 231.01 179.01 232.21 178.81 233.81 C 178.61 235.41 179.01 236.21 178.81 237.81 C 178.61 239.41 178.01 239.41 177.81 241.81 C 177.61 244.21 178.01 246.81 177.81 249.81 C 177.61 252.81 177.01 254.61 176.81 256.81 C 176.61 259.01 176.81 259.21 176.81 260.81 C 176.81 262.41 176.81 263.01 176.81 264.81 C 176.81 266.61 176.81 268.21 176.81 269.81 C 176.81 271.41 176.81 271.81 176.81 272.81 C 176.81 273.81 176.81 274.41 176.81 274.81 C 176.81 275.21 176.81 274.81 176.81 274.81 C 176.81 274.81 176.81 274.81 176.81 274.81 C 176.81 274.81 176.81 274.81 176.81 274.81 C 176.81 274.81 176.81 274.81 176.81 274.81 C 176.81 274.81 176.41 275.01 176.81 274.81 C 177.21 274.61 177.21 274.41 178.81 273.81 C 180.41 273.21 182.61 272.61 184.81 271.81 C 187.01 271.01 187.21 270.81 189.81 269.81 C 192.41 268.81 196.21 267.41 197.81 266.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 234.81 144.81 C 234.81 144.81 234.21 144.81 234.81 144.81 C 235.41 144.81 236.61 144.81 237.81 144.81 C 239.01 144.81 239.21 145.01 240.81 144.81 C 242.41 144.61 243.21 144.41 245.81 143.81 C 248.41 143.21 252.21 142.21 253.81 141.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 236.81 163.81 C 236.81 163.81 237.01 163.81 236.81 163.81 C 236.61 163.81 236.01 163.61 235.81 163.81 C 235.61 164.01 235.41 164.61 235.81 164.81 C 236.21 165.01 236.21 164.81 237.81 164.81 C 239.41 164.81 241.41 165.01 243.81 164.81 C 246.21 164.61 248.61 164.01 249.81 163.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 290.81 132.81 C 290.81 132.81 290.81 132.81 290.81 132.81 C 290.81 132.81 291.01 132.81 290.81 132.81 C 290.61 132.81 290.21 132.81 289.81 132.81 C 289.41 132.81 289.21 132.81 288.81 132.81 C 288.41 132.81 288.41 132.61 287.81 132.81 C 287.21 133.01 286.61 133.01 285.81 133.81 C 285.01 134.61 284.61 135.81 283.81 136.81 C 283.01 137.81 282.41 137.61 281.81 138.81 C 281.21 140.01 281.01 141.41 280.81 142.81 C 280.61 144.21 280.81 144.61 280.81 145.81 C 280.81 147.01 280.41 148.21 280.81 148.81 C 281.21 149.41 281.41 149.21 282.81 148.81 C 284.21 148.41 286.41 147.61 287.81 146.81 C 289.21 146.01 289.01 146.21 289.81 144.81 C 290.61 143.41 291.41 141.41 291.81 139.81 C 292.21 138.21 291.81 137.61 291.81 136.81 C 291.81 136.01 291.81 136.21 291.81 135.81 C 291.81 135.41 291.81 135.01 291.81 134.81 C 291.81 134.61 291.81 134.81 291.81 134.81 C 291.81 134.81 291.81 134.81 291.81 134.81 C 291.81 134.81 291.81 134.81 291.81 134.81 C 291.81 134.81 291.81 134.61 291.81 134.81 C 291.81 135.01 292.01 135.21 291.81 135.81 C 291.61 136.41 291.01 137.01 290.81 137.81 C 290.61 138.61 291.01 138.21 290.81 139.81 C 290.61 141.41 290.01 143.61 289.81 145.81 C 289.61 148.01 289.81 148.41 289.81 150.81 C 289.81 153.21 289.81 155.21 289.81 157.81 C 289.81 160.41 289.81 162.01 289.81 163.81 C 289.81 165.61 289.81 165.81 289.81 166.81 C 289.81 167.81 289.81 168.41 289.81 168.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 313.81 140.81 C 313.81 140.61 313.81 140.01 313.81 139.81 C 313.81 139.61 313.81 139.81 313.81 139.81 C 313.81 139.81 313.81 139.81 313.81 139.81 C 313.81 139.81 314.01 139.21 313.81 139.81 C 313.61 140.41 313.21 141.61 312.81 142.81 C 312.41 144.01 312.21 144.21 311.81 145.81 C 311.41 147.41 311.01 149.21 310.81 150.81 C 310.61 152.41 310.81 152.41 310.81 153.81 C 310.81 155.21 310.61 156.61 310.81 157.81 C 311.01 159.01 311.21 159.21 311.81 159.81 C 312.41 160.41 313.01 160.81 313.81 160.81 C 314.61 160.81 315.41 160.01 315.81 159.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 313.81 125.81 C 313.81 125.81 313.81 125.81 313.81 125.81 C 313.81 125.81 314.01 125.81 313.81 125.81 C 313.61 125.81 313.01 125.81 312.81 125.81 C 312.61 125.81 312.81 125.81 312.81 125.81 C 312.81 125.81 312.81 126.01 312.81 125.81 C 312.81 125.61 312.81 125.21 312.81 124.81 C 312.81 124.41 312.81 124.01 312.81 123.81 C 312.81 123.61 312.81 124.01 312.81 123.81 C 312.81 123.61 312.81 123.01 312.81 122.81 C 312.81 122.61 312.81 122.81 312.81 122.81 C 312.81 122.81 312.81 122.61 312.81 122.81 C 312.81 123.01 312.81 123.61 312.81 123.81 C 312.81 124.01 312.81 123.81 312.81 123.81 C 312.81 123.81 312.81 123.81 312.81 123.81 C 312.81 123.81 312.81 123.81 312.81 123.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 273.81 112.81 C 273.81 112.81 273.81 112.81 273.81 112.81 C 273.81 112.81 274.01 112.81 273.81 112.81 C 273.61 112.81 273.21 112.61 272.81 112.81 C 272.41 113.01 272.41 112.81 271.81 113.81 C 271.21 114.81 270.41 116.21 269.81 117.81 C 269.21 119.41 269.41 120.21 268.81 121.81 C 268.21 123.41 267.81 123.21 266.81 125.81 C 265.81 128.41 264.61 131.61 263.81 134.81 C 263.01 138.01 263.21 138.01 262.81 141.81 C 262.41 145.61 262.01 150.01 261.81 153.81 C 261.61 157.61 261.61 157.41 261.81 160.81 C 262.01 164.21 262.21 167.61 262.81 170.81 C 263.41 174.01 264.41 175.61 264.81 176.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 328.81 104.81 C 328.81 105.01 328.41 105.01 328.81 105.81 C 329.21 106.61 330.21 107.41 330.81 108.81 C 331.41 110.21 331.21 110.41 331.81 112.81 C 332.41 115.21 333.21 118.01 333.81 120.81 C 334.41 123.61 334.21 123.61 334.81 126.81 C 335.41 130.01 336.21 133.21 336.81 136.81 C 337.41 140.41 337.61 141.41 337.81 144.81 C 338.01 148.21 338.01 150.41 337.81 153.81 C 337.61 157.21 337.41 158.41 336.81 161.81 C 336.21 165.21 335.61 168.01 334.81 170.81 C 334.01 173.61 334.41 173.61 332.81 175.81 C 331.21 178.01 328.01 180.61 326.81 181.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path><path d="M 355.81 86.81 C 355.81 86.81 355.81 86.81 355.81 86.81 C 355.81 86.81 356.01 86.81 355.81 86.81 C 355.61 86.81 355.01 86.81 354.81 86.81 C 354.61 86.81 355.21 86.81 354.81 86.81 C 354.41 86.81 353.41 86.61 352.81 86.81 C 352.21 87.01 352.41 87.21 351.81 87.81 C 351.21 88.41 350.41 89.21 349.81 89.81 C 349.21 90.41 349.41 90.01 348.81 90.81 C 348.21 91.61 347.21 92.81 346.81 93.81 C 346.41 94.81 346.81 94.81 346.81 95.81 C 346.81 96.81 346.81 98.01 346.81 98.81 C 346.81 99.61 346.41 99.41 346.81 99.81 C 347.21 100.21 347.81 100.81 348.81 100.81 C 349.81 100.81 350.81 100.21 351.81 99.81 C 352.81 99.41 353.01 99.21 353.81 98.81 C 354.61 98.41 355.21 98.61 355.81 97.81 C 356.41 97.01 356.61 95.81 356.81 94.81 C 357.01 93.81 356.81 93.61 356.81 92.81 C 356.81 92.01 356.81 91.21 356.81 90.81 C 356.81 90.41 356.61 91.01 356.81 90.81 C 357.01 90.61 357.61 90.01 357.81 89.81 C 358.01 89.61 357.81 90.01 357.81 89.81 C 357.81 89.61 357.81 89.01 357.81 88.81 C 357.81 88.61 357.81 88.81 357.81 88.81 C 357.81 88.81 357.81 88.81 357.81 88.81 C 357.81 88.81 357.81 88.81 357.81 88.81 C 357.81 88.81 357.81 89.01 357.81 88.81 C 357.81 88.61 358.01 88.01 357.81 87.81 C 357.61 87.61 357.01 87.81 356.81 87.81 C 356.61 87.81 356.81 87.81 356.81 87.81 C 356.81 87.81 356.81 87.81 356.81 87.81 C 356.81 87.81 356.81 87.81 356.81 87.81 C 356.81 87.81 356.81 87.61 356.81 87.81 C 356.81 88.01 356.81 88.41 356.81 88.81 C 356.81 89.21 356.81 89.01 356.81 89.81 C 356.81 90.61 356.81 91.81 356.81 92.81 C 356.81 93.81 356.61 93.81 356.81 94.81 C 357.01 95.81 357.61 96.61 357.81 97.81 C 358.01 99.01 357.61 99.61 357.81 100.81 C 358.01 102.01 358.61 102.61 358.81 103.81 C 359.01 105.01 358.81 105.81 358.81 106.81 C 358.81 107.81 358.81 108.01 358.81 108.81 C 358.81 109.61 359.01 110.01 358.81 110.81 C 358.61 111.61 358.61 112.01 357.81 112.81 C 357.01 113.61 355.81 114.21 354.81 114.81 C 353.81 115.41 353.41 115.61 352.81 115.81 C 352.21 116.01 352.01 115.81 351.81 115.81" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path></svg>
        </div>
    );
}

export default SVGScroll;