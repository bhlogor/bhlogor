import React from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <header className="flex flex-wrap items-center justify-between bg-white px-8 py-5 shadow-md shadow-slate-900/5 transition duration-500">
          PostWeb
        </header>
        <main className='max-w-screen-sm px-5 py-8 mx-auto'>
          {children}
        </main>
        <footer className="items-center justify-between bg-white px-8 py-5 border-t border-slate-900/5 transition duration-500">
          2023 #PostWeb
        </footer>
      </>
    )
  }
