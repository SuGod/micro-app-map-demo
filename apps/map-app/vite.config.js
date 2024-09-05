

import  {defineConfig} from "vite";
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import {mars3dPlugin} from 'vite-plugin-mars3d'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const cesiumSource = 'node_modules/mars3d-cesium/Build/Cesium'
const cesiumBaseUrl = 'cesiumStatic'

export default defineConfig({
    plugins:[
        Vue(),
        VueJsx(),
        viteStaticCopy({
            targets: [
                { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
                { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
                { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
                { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
            ],
        }),
    ],
    server:{
        cors:true,
        port:8002
    },
    define: {
        CESIUM_BASE_URL: JSON.stringify(`/${cesiumBaseUrl}`),
    },
})
