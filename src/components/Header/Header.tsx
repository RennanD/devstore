import Link from 'next/link'
import Image from 'next/image'
import { Cart } from './Cart'
import { SearchForm } from './SearchForm'
import { Suspense } from 'react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <Cart />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/rennand.png"
            alt="Rennan Oliveira"
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
          />
        </Link>
      </div>
    </header>
  )
}
