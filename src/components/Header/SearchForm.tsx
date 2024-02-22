'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const params = searchParams.get('q')

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) return

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleForm}
      className="flex max-w-xs w-full items-center gap-4 rounded-full bg-zinc-900 px-5 py-4 ring-zinc-700"
    >
      <Search className="text-xl text-zinc-500" />

      <input
        type="text"
        name="q"
        defaultValue={params ?? ''}
        placeholder="buscar produtos"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
