import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const productStore = (set) => ({
  products: null,
  setProducts: (product) => {
    set((state) => ({
      products: product
    }))
  },
})

const useProductStore = create(
  devtools(
    persist(productStore, {
      name: "products",
    })
  )
)

export default useProductStore;