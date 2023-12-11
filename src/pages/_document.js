import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <NextScript src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></NextScript>
        <NextScript src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></NextScript>
      </body>
    </Html>
  );
}
