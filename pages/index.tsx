import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

type Post = {
  id: string;
  date: string;
  slug: string;
  title: string;
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
    <div className='flex flex-col'>
      <ul>
      {data.map((p: Post) => (
        <li key={p.id}>
          <Link href="/[slug]" as={`${p.slug}`}>
              {p.title}
            </Link>
        </li> 
      ))}
      </ul>
      <div className='mt-8 flex'>
      <button className='flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900' onClick={() => setPage(page + 1)}>Next page</button>{page}
      <button className='flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900' onClick={() => setPage(page - 1)}>Previous page</button>
      </div>
    </div>
  )
}
async function fetchPost( page: any) {
  const res = await fetch(
    `http://localhost:3000/api/?page=${page}`
  );
  return res.json();
}
export const getServerSideProps: GetServerSideProps = async ({ query }: any) =>  {
  const page = query.page || 1;
  const data = await fetchPost(page);
  return {
    props: { data }
  }
  
};