import { create } from "zustand";

export type State = {
  field: boolean;
  waze: boolean;
  live11: boolean;
  sagittarius: boolean;
};

export type Action = {
  setField: () => void;
  setWaze: () => void;
  setLive11: () => void;
  setSagittarius: () => void;
};

export const useViewStore = create<State & Action>((set) => ({
  field: true,
  waze: false,
  live11: false,
  sagittarius: false,
  setField: () =>
    set({ field: true, live11: false, sagittarius: false, waze: false }),
  setWaze: () =>
    set({ waze: true, field: false, live11: false, sagittarius: false }),
  setLive11: () =>
    set({ live11: true, field: false, sagittarius: false, waze: false }),
  setSagittarius: () =>
    set({ sagittarius: true, live11: false, field: false, waze: false })
}));
