import { create } from "zustand";

const useIsAuthorized = create((set) => ({
  isAuthorized: false,

  setIsAuthorized: (value) => set({
    isAuthorized: value
  }),

}));

export default useIsAuthorized;