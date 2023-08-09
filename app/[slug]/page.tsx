import Image from 'next/image';
import placeholder from '/public/thumbnail-placeholder.svg'
import type { Metadata } from "next";

async function getData(slug: string) {
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/rpc/get_index?slug=eq.${slug}`, {
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ'
    }
  });
  return res.json()
}

type Params = {
  params: {
    slug: string;
  }
}

type Post = {
  id: number;
  date: string;
  slug: string;
  image: string;
  title: string;
  desc: string;
  content: string;
  tag: string;
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const data = await getData(slug)
  return {
      title: `${data[0].title} | Postweb`,
      description:  `${data[0].desc} | Postweb`,
  
  } 
}

export default async function Page({ params: { slug } }: Params) {
  const data = await getData(slug);
  return (
    <>
      {data.map((p: any) =>
        <>
          <div className="relative overflow-hidden rounded-xl md:rounded-[20px]">
            <Image
              className="h-full w-full object-cover"
              src={p.image == null ? placeholder : p.image}
              alt="Thumbnail"
              width={624}
              height={386}
              priority
            />
          </div>
          <h1 className='mt-2 text-4xl font-bold leading-tight lg:mt-4 lg:text-6xl'>
            {p.title}
          </h1>
          <section className='pt-6' dangerouslySetInnerHTML={{ __html: p["content"] }}></section>
        </>
      )}
    </>
  )
}