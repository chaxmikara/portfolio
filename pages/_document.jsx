import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Make sure the script path is correct with the basePath */}
                {process.env.NODE_ENV === 'production' ? (
                    <script src="/portfolio/index-redirect-script.js" />
                ) : (
                    <script src="/index-redirect-script.js" />
                )}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
