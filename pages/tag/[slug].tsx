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

export default function Tag({ data }: any) {
 
  return (
    <div className='flex flex-col'>
      <ul>
      {data.map((p: Post) => (
        <li key={p.id}>
          <Link prefetch={false} href={'/' + p.slug}>
              {p.title}
            </Link>
        </li> 
      ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: any) =>  {
  const { slug } = query
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/rpc/get_index?tag=eq.${slug}`, {
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