"use client";

import { useViewStore } from "@/zustand/zustand";

import Clock from "@/components/dashboard/clock";
import IframeComponent from "@/components/dashboard/iframe";
import LinkBox from "@/components/dashboard/linkbox";
import Logo from "@/components/dashboard/logo";
import Navigation from "@/components/dashboard/navigation/navigation";

const urls = [
  // navigation
  {
    url: "https%3A%2F%2Fembed.waze.com%2Fiframe%3Fzoom%3D18%26lat%3D-23.55052%26lon%3D-46.63331%26pin%3D1%26desc%3D1"
  },
  { url: "https%3A%2F%2Fwww.easygo.co.il" },
  { url: "https%3A%2F%2Fwww.onezerobank.com" },
  { url: "https%3A%2F%2Fwww.flowernet.co.il" },
  { url: "https%3A%2F%2Fwww.hidabroot.org%2Fvod" },
  { url: "https%3A%2F%2Fwww.mako.co.il%2Fmako-vod" },
  { url: "https%3A%2F%2Fwww.one.co.il%2FVOD" },
  { url: "https%3A%2F%2Fpopcorntimeonline.xyz" },

  // LinkBox
  { url: "https%3A%2F%2Fwww.mako.co.il%2Fmako-vod" },
  {
    url: "https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F101_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue"
  },
  { url: "https%3A%2F%2Fwww.mako.co.il%2Fmako-vod" },
  { url: "https%3A%2F%2Fwww.mivzaklive.co.il%2FTV%2F13.php" },
  {
    url: "https%3A%2F%2Fsnippet.univtec.com%2Fplayer.html%3Fdata-insight%3DeyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0%3D%26data-guid%3Ddb529069-92ee-4cab-bf27-dba373019760%26data-type%3Dchannels%26data-kantar%3Dnow14web"
  },
  { url: "https%3A%2F%2Fwww.nick.co.il" },
  {
    url: "https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F1_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue"
  },
  { url: "https%3A%2F%2Fwww.pais.co.il%2Fchance" },
  { url: "https%3A%2F%2Fwww.n12.co.il" },
  { url: "https%3A%2F%2Ftv.mivzaklive.co.il%2F26.php" }
];

function DynamicPage({ params }: { params: { url: string } }) {
  const ClockState = useViewStore((state) => state.clock);

  const currentUrl = urls.find((item) => item.url === params.url);
  const decodedUrl = currentUrl?.url ? decodeURIComponent(currentUrl.url) : "";
  return (
    <main className="flex w-full flex-col bg-[#222831]">
      <IframeComponent url={decodedUrl} />
      {ClockState ? <Clock /> : null}
      <LinkBox />
      <Logo />
      <Navigation />
    </main>
  );
}

export default DynamicPage;
