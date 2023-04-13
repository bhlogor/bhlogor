import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

type Post = {
  id: string;
  date: string;
  slug: string;
  image: string;
  title: string;
  desc: string;
  content: string;
  tag: string;
};

export default function Home({ data }: any) {
  const [page, setPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: '/',
      query: { page: page },
    }, '/');
  }, [page]);

  return (
    <>
    <Head>
    <title>PostHub</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="PostHub" />
        <meta name="google-site-verification" content="7BWdUA58XJuwaBKCFnPmbcq5HgxO57y8u7tQ5v0zPZo" />
    </Head>
      {data.map((p: Post) => (
        <div className='mt-8 mb-24 flex flex-col rounded-lg shadow-lg overflow-hidden' key={p.id}>
          <div className='flex-shrink-0 bg-white'>
            <Image className='h-full w-full object-cover' src={p.image} alt={'Image' + p.title} width={600} height={250} priority/>
          </div>
          <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <Link prefetch={false} href={p.slug} legacyBehavior>
              <a><h3 className='mt-2 text-xl leading-7 font-semibold text-gray-900'>{p.title}</h3></a>
              </Link>
               <p className='mt-3 text-base leading-6 text-gray-500'>{p.desc}</p>
          </div>
        </div> 
      ))}
      <div className='mt-8 flex'>
      <button className='flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900' onClick={() => setPage(page + 1)}>Next page</button>{page}
      <button className='flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900' onClick={() => setPage(page - 1)}>Previous page</button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: any ) => {
  const page = query.page || 1;
  const size: number = 5
  const start = (page -1) * size
  const end = start + size
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/rpc/get_index?&offset=${start}&limit=${end}`, {
    headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ'
    }
  });
  const data = await res.json();

  return {
    props: { data }
  }
  
};