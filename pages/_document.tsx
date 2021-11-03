// Se configuran estilos globales si se necesitan, también se puede pegar el script de font awesome

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <script src='https://kit.fontawesome.com/433667d0d8.js' crossOrigin='anonymous'/>
        </Head>
        <body style={{backgroundColor: 'red'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument