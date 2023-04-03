import Head from 'next/head'

export default function NotFound() {
  return (
    <>
    <Head>
    <title>404 Page Not Found</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div className="mt-8 mb-24 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
      <h2 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>404 Page Not Found</h2>
      <p className='mt-3 text-base leading-6 text-gray-500'>Could not find requested resource</p>
    </div>
    </div>
    </>
  );
}