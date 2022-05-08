import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html className="h-full bg-gray-50">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body className="h-full">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}