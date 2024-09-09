<script setup>
import Map  from './map.vue'

</script>

<template>
  <div>
    <h1 class="text-center">Main Project</h1>
    <hr />
    <h3 class="text-center">Mars3d Map</h3>
    <div class="map-container">
      <Map name="mars3d-map" url="//localhost:8002/" />
    </div>
    <h3 class="text-center">Cesium Map</h3>
    <div class="map-container">
      <Map name="cesium-map" url="//localhost:8003/"/>
    </div>
  </div>
</template>

<style scoped>

.map-container{
  width: 1200px;
  height: 620px;
  margin: 0 auto;
}
.text-center{
  text-align: center;
}

</style>
