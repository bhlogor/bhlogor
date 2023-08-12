import client from '../client';

type GetPostsParam = {
  page?: number;
  limit?: number;
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
};

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getPosts({ limit = 3, page = 1 }: GetPostsParam) {
  const offset = (page - 1) * limit;
  const data = await client.get<Post[]>(`/rest/v1/rpc/get_index?offset=${offset}&limit=${limit}`);
  await sleep(500);
  console.log(data)
  return {
    posts: data,
    pageInfo: {
      nextPage: data.length >= 3 ? page + 1 : undefined,
    },
  };
}


