import App from 'next/app';
import React from 'react';

// global styles
import '@styles/vendors/main.scss';

// seos
import { DefaultSeo, LocalBusinessJsonLd, SocialProfileJsonLd } from 'next-seo';

import SEO from '@next-seo.config';

const { metas, microdatas } = SEO;

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    const {
      store,
      isServer,
      req,
      query: { amp },
    } = ctx;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router, store } = this.props;

    return (
      <>
        <DefaultSeo {...metas} />
        <LocalBusinessJsonLd {...microdatas.LocalBusinessJsonLd} />
        {/* <SocialProfileJsonLd {...microdatas.SocialProfileJsonLd} /> */}
        <Component {...pageProps} />
      </>
      // </Provider>
    );
  }
}

export default MyApp;
