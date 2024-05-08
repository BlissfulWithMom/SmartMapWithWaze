"use client";

export default function DropMenu({
  isOpen,
  toggle
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className="sidebar-container fixed left-0 z-50 grid h-full w-full justify-center overflow-hidden bg-white pt-[120px]"
      style={{
        opacity: `${isOpen ? "1" : "0"}`,
        top: ` ${isOpen ? "0" : "-100%"}`
      }}
    >
      <button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>

      <ul className="sidebar-nav z-50 text-center text-xl leading-relaxed">
        <li>
          <button
            onClick={() => {
              toggle();
            }}
          />
        </li>
        <li>
          <a href="/dashboard">Home</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fembed.waze.com%2Fiframe%3Fzoom%3D18%26lat%3D-23.55052%26lon%3D-46.63331%26pin%3D1%26desc%3D1">
            Drive
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.easygo.co.il">
            כרטיסי טיסה ונופש
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.onezerobank.com">בנק אפס אחד</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.flowernet.co.il">הזמנת פרחים</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.hidabroot.org%2Fvod">
            הידברות שידור חי
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.mako.co.il%2Fmako-vod">צ'אט</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.one.co.il%2FVOD">ספורט 1</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fpopcorntimeonline.xyz">סרטים</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.mako.co.il%2Fmako-vod">
            כפתור 19
          </a>
        </li>

        <li>
          <a href="/dashboard/https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F101_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue">
            11 כאן
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.mako.co.il%2Fmako-vod">
            12 קשת
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.mivzaklive.co.il%2FTV%2F13.php">
            ערוץ 13 שידור חי
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fsnippet.univtec.com%2Fplayer.html%3Fdata-insight%3DeyJndWlkIjoiMF9uMzAwaXkxYSIsInR5cGUiOiJ2b2RzIiwiYWNjb3VudElkIjoiNjM5Nzc1M2ZmZjg3MTk3MWFlNmEzYzAzIiwiY2xpZW50IjoiY2hhbm5lbDE0IiwiYXBpIjoiaHR0cHM6Ly9pbnNpZ2h0LWFwaS1jaGFubmVsMTQudW5pdnRlYy5jb20vIn0%3D%26data-guid%3Ddb529069-92ee-4cab-bf27-dba373019760%26data-type%3Dchannels%26data-kantar%3Dnow14web">
            ערוץ 14 שידור חי
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.nick.co.il">ניק ערוץ הילדיםl</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fcdnapisec.kaltura.com%2Fhtml5%2Fhtml5lib%2Fv2.98%2FmwEmbedFrame.php%2Fp%2F2717431%2Fuiconf_id%2F46986963%2Fentry_id%2F1_sdqcljik%3Fwid%3D_2717431%26iframeembed%3Dtrue%26playerId%3Dkaltura_player_1614238298%26entry_id%3D1_sdqcljik%26flashvars%5BautoPlay%5D%3Dfalse%26flashvars%5Blivecore.disablelivecheck%5D%3Dtrue">
            כאן 11 סדרות
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.pais.co.il%2Fchance">
            מפעל הפיס
          </a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Fwww.n12.co.il">חדשות</a>
        </li>
        <li>
          <a href="/dashboard/https%3A%2F%2Ftv.mivzaklive.co.il%2F26.php">
            CNNLIVE
          </a>
        </li>
      </ul>
    </div>
  );
}
