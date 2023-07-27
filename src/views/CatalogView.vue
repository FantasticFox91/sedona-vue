<script setup lang="ts">
import PromoSection from '@/components/PromoSection.vue';
import CatalogList from '@/components/CatalogList.vue';
import DoubtsSection from '@/components/DoubtsSection.vue';
</script>

<template>
  <PromoSection :isInnerPage="true">
    <template #heading>
      Фото и видео
    </template>
    <template #subheading>
      Не можете решиться на путешествие из-за курса?<br /> Фотографии помогут вам забыть о политике и экономике.
    </template>
  </PromoSection>
  <CatalogList />
  <DoubtsSection />
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/mixins.scss';

br {
  display: none;

  @include vp-768 {
    display: block;
  }
}
</style>
