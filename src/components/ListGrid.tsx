'use client'

import { List } from '@prisma/client'
import { ListCard } from './ListCard'

export function ListGrid({ lists }: { lists: List[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  )
}
