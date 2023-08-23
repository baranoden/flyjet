import "../styles/globals.css";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { appWithTranslation } from "next-i18next";
import StatusRender from "presentations/components/statusRender";
import { Provider } from "react-redux";
import { reduxWrapper } from "store";
import Head from "next/head";
function MyApp({ Component, ...rest }) {
  const { props, store } = reduxWrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <>
          <title>Test</title>
          <meta name="description" content="-" />
          <meta name="keywords" content="-" />
          <meta name="author" content="-" />
          <meta property="og:title" content="Test" />
          <meta property="og:description" content="-" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Test" />
          <meta name="twitter:description" content="-" />
          <meta name="twitter:image" content="/favicon.ico" />
          <meta name="twitter:card" content="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="-" />
        </>
      </Head>
      <Provider store={store}>
        <StatusRender render={<Component {...props.pageProps} />} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
