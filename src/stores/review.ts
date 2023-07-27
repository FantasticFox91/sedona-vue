import { defineStore } from 'pinia';
import { useModalsStore } from './modals'

export const useReviewStore = defineStore('review', {
  state: () => {

  },
  actions: {
    sendReview(data) {
      const modalsStore = useModalsStore();
      console.log('store',data)
      modalsStore.isSuccess = true;
    }
  }
})

