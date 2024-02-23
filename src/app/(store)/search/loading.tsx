import { Skeleton } from '@/components/Skeleton/Skeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './CurrentSearch'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
        <Skeleton className="h-[400px]"></Skeleton>
      </div>
    </div>
  )
}
