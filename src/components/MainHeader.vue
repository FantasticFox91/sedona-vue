<script setup lang="ts">
import HeaderNavigation from './HeaderNavigation.vue';
import MainLogo from './MainLogotype.vue';
</script>

<template>
  <header class="header header__container container">
    <HeaderNavigation />
    <MainLogo />
  </header>
</template>


<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';
.header {
  background-color: $color-default-white;
}

.header__container {
  position: relative;
  display: flex;
  justify-content: flex-end;

  @include vp-768 {
    padding: 0;
  }
}

</style>
