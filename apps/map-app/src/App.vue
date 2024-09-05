<script setup>
import * as mars3d from 'mars3d'
import {onMounted} from "vue";
import mapConfig from './config/config.json'
onMounted(() => {
  const map = new mars3d.Map('mapContainer', mapConfig)
  console.log(map)
})
</script>

<template>
  <div id="mapContainer" />
</template>
