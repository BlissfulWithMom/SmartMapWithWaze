"use client";

// import { Metadata } from "next";
// import { SITE_TITLE } from "@/utils/constant";

import Sidebar from "@/components/dashboard/sidebar";
import Field from "@/components/dashboard/field";
import Navigation from "@/components/dashboard/navigation/navigation";
import IframeComponent from "@/components/dashboard/iframe";
import { useViewStore } from "@/zustand/zustand";
import Clock from "@/components/dashboard/clock";

// export const metadata: Metadata = {
//   title: `${SITE_TITLE} - Register`,
//   description: `${SITE_TITLE} - Register`
// };

export default function DashboardPage() {
  const FieldState = useViewStore((state) => state.field);
  const WazeState = useViewStore((state) => state.waze);
  const Live11State = useViewStore((state) => state.live11);
  const Sport1State = useViewStore((state) => state.sport1);
  const LiveChatState = useViewStore((state) => state.liveChat);
  const Channel13State = useViewStore((state) => state.channel13);
  const Channel14state = useViewStore((state) => state.channel14);
  const ChildrenState = useViewStore((state) => state.children);
  const SagittariusState = useViewStore((state) => state.sagittarius);
  const Here11State = useViewStore((state) => state.here11);
  const Button19State = useViewStore((state) => state.button19);
  const OneBankState = useViewStore((state) => state.oneBank);
  const ChatState = useViewStore((state) => state.chat);
  const FlowerState = useViewStore((state) => state.flower);
  const NewsState = useViewStore((state) => state.news);
  const LotteryState = useViewStore((state) => state.lottery);
  const FlightState = useViewStore((state) => state.flight);
  const CNNState = useViewStore((state) => state.cnn);
  const MovieState = useViewStore((state) => state.movie);
  return (
    <main className="relative flex w-full flex-col bg-[#1a151c]">
      <Navigation />
      <Sidebar />
      <Clock />
      {FieldState && <Field />}
      {WazeState && (
        <IframeComponent url="https://embed.waze.com/iframe?zoom=18&lat=-23.55052&lon=-46.63331&pin=1&desc=1" />
      )}
      {Live11State && (
        <IframeComponent url="https://cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/1_sdqcljik?wid=_2717431&amp;iframeembed=true&amp;playerId=kaltura_player_1614238298&amp;entry_id=1_sdqcljik&amp;flashvars[autoPlay]=false&amp;flashvars[liveCore.disableLiveCheck]=true" />
      )}
      {Sport1State && <IframeComponent url="https://www.one.co.il/VOD/" />}
      {LiveChatState && <IframeComponent url="https://www.hidabroot.org/vod" />}
      {Channel13State && (
        <IframeComponent url="https://www.mivzaklive.co.il/TV/13.php" />
      )}
      {Channel14state && (
        <IframeComponent url="https://snippet.univtec.com/player.html?data-insight=eyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0=&data-guid=db529069-92ee-4cab-bf27-dba373019760&data-type=channels&data-kantar=now14web')" />
      )}
      {ChildrenState && <IframeComponent url="https://www.nick.co.il" />}
      {SagittariusState && (
        <IframeComponent url="https://www.mako.co.il/mako-vod" />
      )}
      {Here11State && (
        <IframeComponent url="https://cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/101_sdqcljik?wid=_2717431&iframeembed=true&playerId=kaltura_player_1614238298&entry_id=1_sdqcljik&flashvars[autoPlay]=false&flashvars[liveCore.disableLiveCheck]=true" />
      )}

      {/* Same as SagittariusState */}
      {Button19State && (
        <IframeComponent url="https://www.mako.co.il/mako-vod" />
      )}
      {OneBankState && <IframeComponent url="https://www.onezerobank.com/" />}

      {/* Same as SagittariusState */}
      {ChatState && <IframeComponent url="https://www.mako.co.il/mako-vod" />}
      {FlowerState && <IframeComponent url="https://www.flowernet.co.il/" />}
      {NewsState && <IframeComponent url="https://www.n12.co.il/" />}
      {LotteryState && <IframeComponent url="https://www.pais.co.il/chance/" />}
      {FlightState && <IframeComponent url="https://www.easygo.co.il/" />}
      {CNNState && <IframeComponent url="https://tv.mivzaklive.co.il/26.php" />}
      {MovieState && <IframeComponent url="https://popcorntimeonline.xyz/" />}
    </main>
  );
}
