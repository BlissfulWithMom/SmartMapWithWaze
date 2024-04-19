import { create } from "zustand";

export type State = {
  field: boolean;
  waze: boolean;
  live11: boolean;
  sport1: boolean;
  liveChat: boolean;
  channel13: boolean;
  channel14: boolean;
  children: boolean;
  sagittarius: boolean;
  here11: boolean;
  button19: boolean;
  oneBank: boolean;
  chat: boolean;
  flower: boolean;
  news: boolean;
  lottery: boolean;
  flight: boolean;
  cnn: boolean;
  movie: boolean;
};

export type Action = {
  setField: () => void;
  setWaze: () => void;
  setLive11: () => void;
  setSport1: () => void;
  setLiveChat: () => void;
  setChannel13: () => void;
  setChannel14: () => void;
  setChildren: () => void;
  setSagittarius: () => void;
  setHere11: () => void;
  setButton19: () => void;
  setOneBank: () => void;
  setChat: () => void;
  setFlower: () => void;
  setNews: () => void;
  setLottery: () => void;
  setFlight: () => void;
  setCnn: () => void;
  setMovie: () => void;
};

export const useViewStore = create<State & Action>((set) => ({
  field: true,
  waze: false,
  live11: false,
  sport1: false,
  liveChat: false,
  channel13: false,
  channel14: false,
  children: false,
  sagittarius: false,
  here11: false,
  button19: false,
  oneBank: false,
  chat: false,
  flower: false,
  news: false,
  lottery: false,
  flight: false,
  cnn: false,
  movie: false,

  setField: () =>
    set({
      field: true,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setWaze: () =>
    set({
      field: false,
      waze: true,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setLive11: () =>
    set({
      field: false,
      waze: false,
      live11: true,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setSport1: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: true,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setLiveChat: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: true,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setChannel13: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: true,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setChannel14: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: true,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setChildren: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: true,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setSagittarius: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: true,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setHere11: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: true,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setButton19: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: true,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setOneBank: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: true,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setChat: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: true,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setFlower: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: true,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setNews: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: true,
      lottery: false,
      flight: false,
      cnn: false,
      movie: false
    }),

  setLottery: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: true,
      flight: false,
      cnn: false,
      movie: false
    }),

  setFlight: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: true,
      cnn: false,
      movie: false
    }),

  setCnn: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: true,
      movie: false
    }),

  setMovie: () =>
    set({
      field: false,
      waze: false,
      live11: false,
      sport1: false,
      liveChat: false,
      channel13: false,
      channel14: false,
      children: false,
      sagittarius: false,
      here11: false,
      button19: false,
      oneBank: false,
      chat: false,
      flower: false,
      news: false,
      lottery: false,
      flight: false,
      cnn: false,
      movie: true
    })
}));
