<script setup lang="ts">
import PromoSection from '@/components/PromoSection.vue';
import AdvantagesSection from '@/components/AdvantagesSection.vue';
import HotelSection from '@/components/HotelSection.vue';
import MapSection from '@/components/MapSection.vue';
</script>

<template>
  <PromoSection>
    <template #heading>
      СЕДОНА — небольшой городок в АРИЗОНЕ,<br> заслуживающий большего!
    </template>
    <template #subheading>
      Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!
    </template>
  </PromoSection>
  <AdvantagesSection />
  <HotelSection />
  <MapSection />
</template>
