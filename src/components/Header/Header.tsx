import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex max-w-xs w-full items-center gap-4 rounded-full bg-zinc-900 px-5 py-4 ring-zinc-700">
          <Search className="text-xl text-zinc-500" />

          <input
            type="text"
            placeholder="buscar produtos"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="text-base" />
          <span className="text-sm">cart (0)</span>
        </div>

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
