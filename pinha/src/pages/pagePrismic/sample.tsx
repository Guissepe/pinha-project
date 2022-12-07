import type { GetStaticPropsContext } from 'next'

type PageParams = { uid: string }

// ...

export default async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  // `params` is typed as PageParams
}