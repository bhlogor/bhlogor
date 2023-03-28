import React from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <header className="flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
          Header
        </header>
        <div className="my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className='bg-white md:w-2/3 lg:w-3/4 px-5 py-1'>
          {children}
        </main>
        <aside className="bg-white md:w-1/3 lg:w-1/4 px-5 py-1">
            <h2 className="text-2xl md:text-4xl">Sidebar</h2>
        </aside>
        </div>
        <footer className="items-center justify-between bg-white px-4 py-5">
          Blog
        </footer>
      </>
    )
  }