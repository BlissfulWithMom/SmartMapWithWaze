// // pages/[url]/page.tsx

// "use client";

// import IframeComponent from "@/components/dashboard/iframe";
// import Clock from "@/components/dashboard/clock";
// import LinkBox from "@/components/dashboard/linkbox";
// import Logo from "@/components/dashboard/logo";

// interface PageProps {
//   url: string;
// }

// export default function Page({ url }: PageProps) {
//   return (
//     <div>
//       <Clock />
//       <LinkBox />
//       <Logo />
//       <IframeComponent url={url} />
//     </div>
//   );
// }

// export async function getServerSideProps({
//   params
// }: {
//   params: { url: string };
// }) {
//   const urls = [
//     { url: "https://www.mako.co.il/mako-vod" },
//     { url: "https://www.onezerobank.com/" }
//   ];

//   const foundUrl = urls.find((u) => u.url === params.url);

//   if (!foundUrl) {
//     return {
//       notFound: true
//     };
//   }

//   return {
//     props: {
//       url: foundUrl.url
//     }
//   };
// }

// pages/[url]/index.js
import { useRouter } from "next/router";

const urls = [
  { url: "https://www.mako.co.il/mako-vod" },
  { url: "https://www.onezerobank.com/" }
];

function DynamicPage() {
  const router = useRouter();
  const { url } = router.query;

  const currentUrl = urls.find((item) => item.url === `/${url}`);

  return (
    <div>
      <h1>Dynamic Page</h1>
      {currentUrl ? (
        <p>The current URL is: {currentUrl.url}</p>
      ) : (
        <p>URL not found</p>
      )}
    </div>
  );
}

export default DynamicPage;
