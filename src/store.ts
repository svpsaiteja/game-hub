import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { searchText } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
}));

export default useGameQueryStore;
