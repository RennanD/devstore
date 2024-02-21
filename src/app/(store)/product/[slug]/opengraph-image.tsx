/* eslint-disable @next/next/no-img-element */
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { env } from '@/env'
import colors from 'tailwindcss/colors'
import { ImageResponse } from 'next/og'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const product = await response.json()

  return product
}

export default async function OGImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: colors.zinc['950'],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
