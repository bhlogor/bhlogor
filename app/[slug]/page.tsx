async function getData(slug: string) {
  const res = await fetch(`https://kqprknumdqwifwdehnht.supabase.co/rest/v1/rpc/get_index?slug=eq.${slug}`, {
    headers: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxcHJrbnVtZHF3aWZ3ZGVobmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxNDY2NzIsImV4cCI6MTk5MDcyMjY3Mn0.YovbUTU4W1QxU0AYC3hHEcIQqkt1ot-d_UpUkau1WBQ'
    }
  });
  return res.json()
}
export interface GetPostString {
  params: string;
  slug: string;
}
export default async function Page({ params: { slug } }: any) {
  const data = await getData(slug)

  return (
    <>
      {data.map((p: any) =>
        <>
          <header className='inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent'>
            <h1>{p.title}</h1>
          </header>
          <section className='pt-6' dangerouslySetInnerHTML={{ __html: p["content"] }}></section>
        </>
      )}
    </>
  )
}