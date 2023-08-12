'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { getPosts } from '@/lib/api/posts';
import Image from 'next/image';
import placeholder from '/public/thumbnail-placeholder.svg'
import Link from 'next/link';

function InfiniteScrollItems() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['infinite-scroll-items'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getPosts({ page: pageParam });
      return res;
    },
    getNextPageParam: (lastPage) => lastPage.pageInfo.nextPage,
  });

  const posts = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.pages.flatMap((page) => page.posts);
  }, [data]);

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;
    if (!fetchNextPage) return;
    fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  if (!isFetchingNextPage && isFetching) {
    return (
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <li className={idx === 0 ? "md:col-span-2 bg-slate-200 flex flex-col h-full" : "bg-slate-200 flex flex-col h-full"} key={`Initial_CardSkeleton_${idx}`}>
          <div className="flex-1">
          <div className={idx === 0 ? "w-full h-[188px] md:h-[300px] rounded-lg bg-slate-100" : "w-full h-[188px] rounded-lg bg-slate-100"}/>
          </div>
          <div className="p-4">
            <div className="mt-1 h-6 w-5/6 rounded-lg bg-slate-100" />
            <div className="mt-2 h-12 rounded-lg bg-slate-100" />
          </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {posts.length > 0 ? (
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {posts.map((post) => (
            <li className={post.id === 1 ? "md:col-span-2 bg-slate-200 flex flex-col h-full" : "bg-slate-200 flex flex-col h-full"} key={post.id}>
              <div className="flex-1">
              <Image
              className={post.id === 1 ? "w-full h-[188px] md:h-[300px]" : "w-full h-[188px]"}
              src={post.image == null ? placeholder : post.image}
              alt="Thumbnail"
              width={post.id === 1 ? "624" : "300"}
              height={post.id === 1 ? "300" : "188"}
              priority
              />
              </div>
              <div className="p-4">
              <h2 className="text-2xl line-clamp-1">
              <Link href={post.slug} prefetch={false}>{post.title}</Link>
              </h2>
              <p className="mt-2 line-clamp-3">{post.desc}</p>
              </div>
            </li>
            ))}
            {hasNextPage &&
              Array.from({ length: 2 }).map((_, idx) => (
                <li className="bg-slate-200 flex flex-col h-full" ref={idx === 0 ? ref : undefined} key={`Scroll_CardSkeleton_${idx}`}>
                <div className="flex-1">
                <div className="w-full h-[188px] rounded-lg bg-slate-100"/>
                </div>
                <div className="p-4">
                  <div className="mt-1 h-6 w-5/6 rounded-lg bg-slate-100" />
                  <div className="mt-4 h-12 rounded-lg bg-slate-100" />
                </div>
                </li>
              ))}
          </ul>
      ) : (
        <h1>Sorry, posts are empty.</h1>
      )}
    </>
  );
}

export default InfiniteScrollItems;
