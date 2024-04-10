import { create } from "zustand";

export type State = {
  googleMap: boolean;
  wazeMap: boolean;
};

export type Action = {
  setGoogleMap: () => void;
  setWazeMap: () => void;
};

export const useMapStore = create<State & Action>((set) => ({
  googleMap: true,
  wazeMap: false,
  setGoogleMap: () => set({ googleMap: true, wazeMap: false }),
  setWazeMap: () => set({ wazeMap: true, googleMap: false })
}));
