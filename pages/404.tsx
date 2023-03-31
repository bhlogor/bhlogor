import Head from 'next/head'

export default function NotFound() {
  return (
    <div className="mt-8 mb-24 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <h2>404 Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}