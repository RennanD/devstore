import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/CartProvider'
import { ReactNode, Suspense } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[78.5rem] grid-rows-[min-content_max-content] gap-6 px-5 pt-10 pb-20">
        <Suspense>
          <Header />
        </Suspense>
        {children}
      </div>
    </CartProvider>
  )
}
