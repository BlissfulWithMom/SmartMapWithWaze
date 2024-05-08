"use client";

export default function LinkBox() {
  const pathName = window.location.pathname;
  const Position = pathName === "/dashboard" ? "flex" : "fixed left-6 top-24";
  const list = [
    {
      title: "כפתור 19",
      url: "https%3A%2F%2Fwww.mako.co.il%2Fmako-vod"
    },
    {
      title: "11 כאן",
      url: "https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F101_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue"
    },
    {
      title: "12 קשת",
      url: "https%3A%2F%2Fwww.mako.co.il%2Fmako-vod"
    },
    {
      title: "ערוץ 13 שידור חי",
      url: "https%3A%2F%2Fwww.mivzaklive.co.il%2FTV%2F13.php"
    },
    {
      title: "ערוץ 14 שידור חי",
      url: "https%3A%2F%2Fsnippet.univtec.com%2Fplayer.html%3Fdata-insight%3DeyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0%3D%26data-guid%3Ddb529069-92ee-4cab-bf27-dba373019760%26data-type%3Dchannels%26data-kantar%3Dnow14web"
    },
    {
      title: "ניק ערוץ הילדיםl",
      url: "https%3A%2F%2Fwww.nick.co.il"
    },
    {
      title: "כאן 11 סדרות",
      url: "https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F1_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue"
    },
    {
      title: "מפעל הפיס",
      url: "https%3A%2F%2Fwww.pais.co.il%2Fchance"
    },
    {
      title: "חדשות",
      url: "https%3A%2F%2Fwww.n12.co.il"
    },
    {
      title: "CNNLIVE",
      url: "https%3A%2F%2Ftv.mivzaklive.co.il%2F26.php"
    }
  ];

  return (
    <div className={`min-w-[220px] max-w-[435px] opacity-90 ${Position}`}>
      <div className="flex h-full w-full flex-wrap items-center justify-center">
        {list.map((l, index) => (
          <div
            key={index}
            className="mr-4 mt-4 flex h-[50px] w-[200px] cursor-pointer items-center justify-center rounded-xl bg-[#6AD4DD] text-black opacity-90 hover:bg-[#EE4266] hover:text-white hover:shadow-[0_0_20px_0_rgba(0,0,0)]"
          >
            <a
              className="flex items-center justify-center"
              href={`/dashboard/${l.url}`}
            >
              {/* <div
                className="flex w-40 items-center justify-start"
                onClick={l.function}
              > */}

              <span className="px-4 text-base">{l.title}</span>
              {/* </div> */}
            </a>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}
