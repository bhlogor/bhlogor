export type Post = {
  id: string;
  date: string;
  slug: string;
  title: string;
  content: string;
  tag: string;
};

export const db: Post[] = [
  {
    id: '1',
    date: '01/02/2023',
    slug: 'apa-itu-next-js',
    title: 'Apa itu Next JS',
    content: '<p>Next.js adalah kerangka kerja untuk membuat aplikasi JavaScript yang dirender server berdasarkan React.js, Node.js, Webpack, dan Babel.js. Next.js pada dasarnya adalah boilerplate proyek untuk React, dibuat dengan memperhatikan praktik terbaik, yang memungkinkan Anda membuat aplikasi web "universal" dengan cara yang sederhana dan konsisten, dengan hampir tidak ada konfigurasi apa pun.</p>',
    tag: 'Next',
  },  {
    id: '2',
    date: '05/02/2023',
    slug: 'cara-install-next-js',
    title: 'Cara Install Next JS',
    content: '<p>Cara install Next.js sangat mudah dengan syarat sudah terinstall Node.js v14.6.0 ke atas, jika belum terinstall Node.js silahkan download di <a href="https://nodejs.org/">nodejs.org</a></p>',
    tag: 'Next',
  },
]
