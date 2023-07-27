<script setup lang="ts">
import PromoSection from '@/components/PromoSection.vue';
import ReviewForm from '@/components/UI/ReviewForm.vue';
</script>

<template>
  <PromoSection :isInnerPage="true">
    <template #heading>
      Оставьте свой отзыв
    </template>
    <template #subheading>
      Помогите нашим отелям стать лучше! оставьте отзыв о них,<br /> а также о посещенных вами достопримечательностях
    </template>
  </PromoSection>
  <ReviewForm />
</template>


