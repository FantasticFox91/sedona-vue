import { defineStore } from 'pinia';
import { useModalsStore } from './modals';

type userData = {
  name: string,
  secondName: string,
  patronym: string,
  phoneNumber: string,
  email: string,
  review: string,
  landmarks: string[],
  comment: string
}

export const useReviewStore = defineStore('review', {
  actions: {
    sendReview(data: userData) {
      console.log(data);
      const modalsStore = useModalsStore();
      console.log('store',data)
      modalsStore.isSuccess = true;
    }
  }
})
