'use client'

import { useCart } from '@/hooks/useCart'

export function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart()

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center w-full rounded-full bg-emerald-600 font-semibold text-white"
      type="button"
      onClick={() => addToCart(productId)}
    >
      Adicionar ao carrinho
    </button>
  )
}
