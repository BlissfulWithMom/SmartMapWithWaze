import IframeComponent from "@/components/dashboard/iframe";

const urls = [
  {
    url: "embed.waze.com/iframe?zoom=18&lat=-23.55052&lon=-46.63331&pin=1&desc=1"
  },
  {
    url: "cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/1_sdqcljik?wid=_2717431&iframeembed=true&playerId=kaltura_player_1614238298&entry_id=1_sdqcljik&flashvars[autoPlay]=false&flashvars[liveCore.disableLiveCheck]=true"
  },
  { url: "www.one.co.il/VOD" },
  { url: "www.hidabroot.org/vod" },
  {
    url: "www.mivzaklive.co.il/TV/13.php"
  },
  {
    url: "snippet.univtec.com/player.html?data-insight=eyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0=&data-guid=db529069-92ee-4cab-bf27-dba373019760&data-type=channels&data-kantar=now14web"
  },
  { url: "www.nick.co.il" },
  { url: "www.mako.co.il/mako-vod" },
  {
    url: "cdnapisec.kaltura.com/html5/html5lib/v2.98/mwEmbedFrame.php/p/2717431/uiconf_id/46986963/entry_id/101_sdqcljik?wid=_2717431&iframeembed=true&playerId=kaltura_player_1614238298&entry_id=1_sdqcljik&flashvars[autoPlay]=false&flashvars[liveCore.disableLiveCheck]=true"
  },
  { url: "www.mako.co.il/mako-vod" },
  { url: "www.onezerobank.com" },
  { url: "www.mako.co.il/mako-vod" },
  { url: "www.flowernet.co.il" },
  { url: "www.n12.co.il" },
  { url: "www.pais.co.il/chance" },
  { url: "www.easygo.co.il" },
  { url: "tv.mivzaklive.co.il/26.php" },
  { url: "popcorntimeonline.xyz" }
];

function DynamicPage({ params }: { params: { url: string } }) {
  const currentUrl = urls.find((item) => item.url === params.url);

  return (
    <div>
      {/* <h1>Dynamic Page</h1>
      {currentUrl ? (
        <p>The current URL is: {params.url}</p>
      ) : (
        <p>URL not found</p>
      )} */}
      <IframeComponent url={currentUrl?.url || ""} />
    </div>
  );
}

export default DynamicPage;

export function generateStaticParams() {
  return urls;
}
