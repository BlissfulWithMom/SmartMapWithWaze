"use client";

import { useViewStore } from "@/zustand/zustand";
import IframeComponent from "@/components/dashboard/iframe";

export default function DynamicPages() {
  const {
    waze,
    live11,
    sport1,
    liveChat,
    channel13,
    channel14,
    children,
    sagittarius,
    here11,
    button19,
    oneBank,
    chat,
    flower,
    news,
    lottery,
    flight,
    cnn,
    movie
  } = useViewStore((state) => state);

  const urls = [
    {
      state: waze,
      url: "embed.waze.com/iframe?zoom=18&lat=-23.55052&lon=-46.63331&pin=1&desc=1"
    },
    {
      state: live11,
      url: "cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/1_sdqcljik?wid=_2717431&iframeembed=true&playerId=kaltura_player_1614238298&entry_id=1_sdqcljik&flashvars[autoPlay]=false&flashvars[liveCore.disableLiveCheck]=true"
    },
    { state: sport1, url: "www.one.co.il/VOD" },
    { state: liveChat, url: "www.hidabroot.org/vod" },
    { state: channel13, url: "www.mivzaklive.co.il/TV/13.php" },
    {
      state: channel14,
      url: "snippet.univtec.com/player.html?data-insight=eyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0=&data-guid=db529069-92ee-4cab-bf27-dba373019760&data-type=channels&data-kantar=now14web"
    },
    { state: children, url: "www.nick.co.il" },
    { state: sagittarius, url: "www.mako.co.il/mako-vod" },
    {
      state: here11,
      url: "cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/101_sdqcljik?wid=_2717431&iframeembed=true&playerId=kaltura_player_1614238298&entry_id=1_sdqcljik&flashvars[autoPlay]=false&flashvars[liveCore.disableLiveCheck]=true"
    },
    { state: button19, url: "www.mako.co.il/mako-vod" },
    { state: oneBank, url: "www.onezerobank.com" },
    { state: chat, url: "www.mako.co.il/mako-vod" },
    { state: flower, url: "www.flowernet.co.il" },
    { state: news, url: "www.n12.co.i/" },
    { state: lottery, url: "www.pais.co.il/chance" },
    { state: flight, url: "www.easygo.co.il" },
    { state: cnn, url: "tv.mivzaklive.co.il/26.php" },
    { state: movie, url: "popcorntimeonline.xyz" }
  ];

  return (
    <>
      {urls.map(
        ({ state, url }) => state && <IframeComponent key={url} url={url} />
      )}
    </>
  );
}
