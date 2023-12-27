import Document, { Html, Head, Main, NextScript } from "next/document";

/*
    _document는 공통적으로 적용할 HTML 마크업을 중심으로 다룬다.
 */
export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <title>Persevi</title>
                <Head>
                    <meta charSet="utf-8"></meta>
                    <body>
                    <Main />
                    <NextScript />
                    </body>
                </Head>
            </Html>
        );
    }
}