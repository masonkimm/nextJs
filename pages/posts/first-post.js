import Link from 'next/link';

export default function firstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>back to home</a>
        </Link>
      </h2>
    </>
  );
}
