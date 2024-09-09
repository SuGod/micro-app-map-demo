<script setup>
import * as mars3d from 'mars3d'
import {onMounted} from "vue";
onMounted(() => {
  const map = new mars3d.Map('mapContainer', {})
  console.log(map)
})
</script>

<template>
  <div id="mapContainer" />
</template>
