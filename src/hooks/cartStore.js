import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  setCart: (product) => set((state) => ({
    cart: [product] 
  })),

  addToCart: (product) => set((state) => {
    const productExists = state.cart.find(prd => prd.id === product.id);

    if(productExists){
        return {
        cart: state.cart.map((prd) => {
          if (prd.id === product.id) {
            return { ...prd, quantity: prd.quantity + product.quantity };
          }
          return prd;
        })
      }
    }
    else{
      if(state.cart.length === 0){
        return { cart: [ product ] }
      }
      else{
        return { cart: [ ...state.cart, product ] }
      }
    }
  }),
}))


export default useCartStore;