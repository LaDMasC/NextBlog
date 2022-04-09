import "src/styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { TopNav } from "src/compoenets";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) return <div>Loading...</div>;

  return (
    <RecoilRoot>
      <TopNav url={router.pathname} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
