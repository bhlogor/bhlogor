import { GetServerSideProps } from 'next'
import Head from 'next/head'

export default function Post({ data }: any) {
  return (
    <>
      {data.map((p: any) => 
      <div key={p.id} className='flex flex-col'>
      <Head>
      <title>{`${p.title} #${p.tag}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent'>{p.title}</h1>
      <div className='py-4' dangerouslySetInnerHTML={{__html:p["content"]}}></div>
      <span>{p.date}</span> <span>{p.tag}</span> 
      </div>
      )}
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ query }: any) =>  {
  const { slug } = query
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/posts?select=*&slug=eq.${slug}`, {
    headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ'
    }
  });
  const data = await res.json();
  return {
    props: {
      data
    },
  };
};

