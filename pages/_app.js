
import React from 'react';
import App from 'next/app';
import Layout from '../components/MyLayout';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps, router } = this.props
    // return <Component {...pageProps} />
    return <>
    <Component {...pageProps} key={router.route} />
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
    </>
  }
}

export default MyApp