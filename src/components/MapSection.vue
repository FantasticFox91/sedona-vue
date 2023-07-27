<script setup lang="ts">
ymaps.ready(init);
function init(){
  document.querySelector('#map').innerHtml = '';
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    center: [35.098200, -111.692191],
    zoom: 7
  });
  
  let myPlacemark = new ymaps.Placemark([35.098200, -111.692191], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/src/assets/svg/map-marker.svg',
    iconImageSize: [27, 27],
    iconImageOffset: [-3, 0]
  });

// Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}


</script>

<template>
  <section class="map">
    <div class="map__container" id="map">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../scss/mixins.scss';
@import '../scss/variables.scss';

.map__image {
  width: 100%;
  object-fit: cover;
  max-height: 350px;
}

.map__container {
  height: 350px;
}
</style>
