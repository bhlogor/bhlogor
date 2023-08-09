'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { getPosts } from '@/lib/api/posts';
import Card, { CardSkeleton } from '../Card';

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
          <li className={idx === 0 ? "md:col-span-2" : ""} key={`Initial_CardSkeleton_${idx}`}>
            <CardSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {posts.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {posts.map((post) => (
              <li className={post.id === 1 ? "md:col-span-2" : ""} key={post.id}>
                <Card
                image={post.image}
                  title={post.title}
                  desc={post.desc}
                  href={`/${post.slug}`}
                />
              </li>
            ))}
            {hasNextPage &&
              Array.from({ length: 2 }).map((_, idx) => (
                <li ref={idx === 0 ? ref : undefined} key={`Scroll_CardSkeleton_${idx}`}>
                  <CardSkeleton />
                </li>
              ))}
          </ul>
        </>
      ) : (
        <h1>Sorry, posts are empty.</h1>
      )}
    </>
  );
}

export default InfiniteScrollItems;
