import type { GetStaticPropsContext } from 'next'

type PageParams = { uid: string }

// ...

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  // `params` is typed as PageParams
}