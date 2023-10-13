/**
 * Static Exportsで動的ルーティングを行う場合、
 * generateStaticParamsを併用して静的にページを生成する必要がある。
 *
 * 下記のコードの場合、`/dynamic/foo`と`/dynamic/bar`の2つのページが生成され、
 * 他のパスパラメータでアクセスした場合は404が返される。
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export function generateStaticParams() {
  return [{ foo: 'foo' }, { foo: 'bar' }];
}

export default function DynamicFoo({ params }: { params: { foo: string } }) {
  return <div>This is DynamicFoo page with {params.foo}</div>;
}
