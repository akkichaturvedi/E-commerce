import { create } from "zustand";

const categoryStore = (set) => ({
  categoryStoredata: [],
  addCategoryData: (data) =>
    set((state) => ({
      categoryStoredata: [...state.categoryStoredata, data],
    })),
  removeCategoryData: () => set({ categoryStoredata: [] }),
});

const useCategoryDataStore = create(categoryStore);

export default useCategoryDataStore;
