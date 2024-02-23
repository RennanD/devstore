import { Skeleton } from '@/components/Skeleton/Skeleton'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">Resultados: para a busca</p>

      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
      </div>
    </div>
  )
}
