<script setup lang="ts">
const props = defineProps({
  heading: String,
  number: Number,
  text: String,
  imageName: String,
})
</script>

<template>
  <div class="card">
    <div class="card__description">
      <h2 class="card__heading">{{ props.heading }}</h2>
      <p class="card__text">— №{{ props.number }} —</p>
      <p class="card__text">{{ props.text }}</p>
    </div>
  </div>
  <div>
    <picture class="card__image">
      <source media="(min-width: 1200px)" type="image/webp" :srcset="`assets/${props.imageName}-desktop.webp, assets/${props.imageName}-desktop.webp 2x`">
      <source media="(min-width: 768px)" type="image/webp" :srcset="`assets/${props.imageName}-tablet.webp, assets/${props.imageName}-tablet@2x.webp 2x`">
      <img class="card__image" type="image/webp" :src="`assets/${props.imageName}-mobile.webp`" :srcset="`assets/${props.imageName}-mobile@2x.webp`" alt="Городок" width="320" height="260">
    </picture>
  </div>
</template>

<style scoped>

</style>
