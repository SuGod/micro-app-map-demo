<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <micro-app
    :name="name"
    :url="url"
    iframe
    inline
    disable-scopecss
    disable-memory-router
  />
</template>
