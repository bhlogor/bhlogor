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

export const getServerSideProps: GetServerSideProps = async ({ query }: any ) =>  {

  const page = query.page || 1;
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/posts?select=*`, {
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