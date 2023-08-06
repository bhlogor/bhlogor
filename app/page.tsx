import InfiniteScrollItems from '@/components/InfiniteScrollItems';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'PostWeb NextJS Blog',
  description: 'PostWeb NextJS Blog Description',
}

export default function Home() {
  return <InfiniteScrollItems />;
}

