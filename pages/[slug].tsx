import { GetServerSideProps } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async ({ query }: any) =>  {
  const { slug } = query
  const res = await fetch(
    `http://localhost:3000/api/${slug}`
  );
  const data = await res.json();

  return {
    props: {
      data
    },
  };
};

export default function Post({ data }: any) {
  return (
    <>
    <Head>
      <title>{`${data.title} #${data.tag}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className='flex flex-col'>
      <h1 className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent'>{data.title}</h1>
      <div className='py-4' dangerouslySetInnerHTML={{__html:data["content"]}}></div>
      <span>{data.date}</span> <span>{data.tag}</span> 
    </div>
    </>
  )
}
