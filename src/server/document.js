import React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';
import serialize from 'serialize-javascript';
import Layout from '../layout';

class CustomDocument extends React.Component {
  static async getInitialProps({ assets, data, renderPage }) {
    const page = await renderPage(Component => props => {
      return (
        <Layout>
          <Component {...props}/>
        </Layout>
      );
    });
    return { assets, data, ...page };
  }

  render() {
    const { helmet, assets, data, serverState, jssStyles } = this.props;

    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    const scripts = {
      development: { __html: `<script src="${assets.client.js}" defer></script>` },
      production: { __html: `<script src="${assets.client.js}" defer crossorigin></script>` },
      initialStore: { __html: `<script>window.__PRELOADED_STATE__ = ${serialize(serverState)}</script>` },
      styles: { __html: jssStyles }
    };

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://roomifonts.s3-us-west-2.amazonaws.com/fonts.css" rel="stylesheet"/>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && (<link rel="stylesheet" href={assets.client.css} />)}
          <span dangerouslySetInnerHTML={scripts[process.env.NODE_ENV]}/>
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <span dangerouslySetInnerHTML={scripts.initialStore}/>
          <style id="jss-server-side" dangerouslySetInnerHTML={scripts.styles}/>
        </body>
      </html>
    );
  }
}

export default CustomDocument;
