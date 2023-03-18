import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const SearchStore = (set) => ({
  searchDatastore: [],
  addData: (data) =>
    set((state) => ({ searchDatastore: [...state.searchDatastore, data] })),
  clearData: () => set({ searchDatastore: [] }),
});

const useSearchStore = create(
  devtools(
    persist(SearchStore, {
      name: "searchHistory",
    })
  )
);

export default useSearchStore;
