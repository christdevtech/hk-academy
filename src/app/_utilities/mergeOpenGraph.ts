import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'HK Academy',
  title: 'HK Academy',
  description: 'Learn & Earn (Embrace Your Financial Future Through High-Income Skills)',
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/wide-logo.jpg`,
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
