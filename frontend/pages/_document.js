import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class SiteDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" sizes="16x16 32x32 48x48 64x64 128x128" href="/static/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" defer rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:200,300,400&display=swap" defer rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:600,500,400,300&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}