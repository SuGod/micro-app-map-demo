<template>
  <div id="mapContainer" />
</template>

<script setup>
import {onMounted} from "vue";
import * as Cesium from "cesium";
onMounted(() => {
  const viewer = new Cesium.Viewer('mapContainer',{
    infoBox: false,
  })
  console.log(viewer)
})

</script>

<style lang="less">
html,body,#map-app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
#mapContainer{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
