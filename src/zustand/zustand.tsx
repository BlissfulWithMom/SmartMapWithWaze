import { create } from "zustand";

export type State = {
  clock: boolean;
};

export type Action = {
  setClock: () => void;
};

export const useViewStore = create<State & Action>((set) => ({
  clock: true,

  setClock: () => set((state) => ({ clock: !state.clock }))
}));
