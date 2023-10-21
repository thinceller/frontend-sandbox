import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const res = await fetch('https://example.com').then((res) => res.text());
  console.log(res);

  return {
    title: 'Foo | Create Next App',
  };
}

export default function Foo() {
  return <div>This is Foo page</div>;
}
