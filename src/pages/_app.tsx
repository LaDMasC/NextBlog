import "src/styles/globals.css";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { TopNav } from "src/compoenets";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TopNav />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
