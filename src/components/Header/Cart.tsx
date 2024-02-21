'use client'

import { useCart } from '@/hooks/useCart'
import { ShoppingBag } from 'lucide-react'

export function Cart() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="text-base" />
      <span className="text-sm">cart ({items.length})</span>
    </div>
  )
}
