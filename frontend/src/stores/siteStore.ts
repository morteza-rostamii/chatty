
import { create } from 'zustand'
//import toast from 'react-hot-toast';

//const toastError = (err: string) => toast.error(err || 'Some Error!');
//const toastSuccess = (msg: string) => toast.success(msg || 'Some Success!');

export const useSiteStore = create<any>((
  set: any, 
  get: any
) => ({
  historyStack: [],

  loading: false,

  setHistoryStackAct: async (stack:any[]) => {
    
    //set((s:any) => ({...s, loadBtcLivePrice: true}));
    try {
      
      set((s:any) => ({...s, historyStack: stack}));
      
      //set((s:any) => ({...s, loadBtcLivePrice: false}));
    }
    catch(error:any) {
      console.log(error?.message || error);
      console.log(error?.response?.data);
     // set((s:any) => ({...s, loadBtcLivePrice: false}));
    }
  },

  // global alert modal
  //openAlertModal
  isOpen: false,
  modalData: null,
  onOpen: () => set((s:any) => ({...s, isOpen: true})), 
  onClose: () => set((s:any) => ({...s, isOpen: false})), 
  modalOn: (data:any) => {
    set((s:any) => ({...s, modalData: data}));
    get().onOpen();
  }
  
}));

//@ts-ignore
const unsub = useSiteStore.subscribe((state:any) => {
  console.log('useSiteStore:', state);
});