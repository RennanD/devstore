import Image from 'next/image'

export default function Product() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Moletom never stop learning
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 rounded-full py-2.5 bg-violet-500">
            R$129
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10,75
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanho</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>
        <button
          className="mt-8 flex h-12 items-center justify-center w-full rounded-full bg-emerald-600 font-semibold text-white"
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
