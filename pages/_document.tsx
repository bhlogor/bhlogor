import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-full'>
      <Head />
      <body className='bg-gray-100 dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
