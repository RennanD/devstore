import { Header } from '@/components/Header'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[78.5rem] grid-rows-[min-content_max-content] gap-6 px-5 pt-10 pb-20">
      <Header />
      {children}
    </div>
  )
}
