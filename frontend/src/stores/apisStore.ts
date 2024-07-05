
import { create } from 'zustand'
//import toast from 'react-hot-toast';
//import Axios from '@/configs/axiosConfig';
//import { API } from '@/routes/apis';
import { BTC_PRICE_API } from '@/configs/config';
//import Axios from '@/configs/axiosConfig';

//const toastError = (err: string) => toast.error(err || 'Some Error!');
//const toastSuccess = (msg: string) => toast.success(msg || 'Some Success!');

export const useApisStore = create<any>((
  set: any, 
  //get: any
) => ({
  btcLivePrice: null,
  loadBtcLivePrice: true,

  loading: false,

  getBtcPriceAct: async () => {
    
    set((s:any) => ({...s, loadBtcLivePrice: true}));
    try {
      
      //const response = await Axios.get(BTC_PRICE_API);
      const response = await fetch(BTC_PRICE_API);
      
      const data = await response.json();
      if (!data) return;

      set((s:any) => ({
        ...s,
        btcLivePrice: data,
      }))

      console.log(data);  
      set((s:any) => ({...s, loadBtcLivePrice: false}));
    }
    catch(error:any) {
      console.log(error?.message || error);
      console.log(error?.response?.data);
      set((s:any) => ({...s, loadBtcLivePrice: false}));
    }
  },

}));

//@ts-ignore
const unsub = useApisStore.subscribe((state:any) => {
  console.log('useApisStore:', state);
});