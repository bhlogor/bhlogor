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
          <Link href="/[slug]" as={`/${p.slug}`}>
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
  const res = await fetch(`http://localhost:3000/api/tag/${slug}`);
  const data = await res.json();

  return {
    props: { data }
  }
  
};