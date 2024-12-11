'use client'

import { List } from '@prisma/client'
import { ShareIcon } from '@heroicons/react/24/outline'

export function ListCard({ list }: { list: List }) {
  const completedItems = list.items.filter(item => item.completed).length
  const totalItems = list.items.length

  return (
    <div className="p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-text">{list.title}</h3>
        <button 
          onClick={() => navigator.clipboard.writeText(`${window.location.origin}/list/${list.shareUrl}`)}
          className="p-2 rounded-full hover:bg-primary/20"
        >
          <ShareIcon className="w-5 h-5 text-primary" />
        </button>
      </div>
      <div className="mt-4 text-sm text-text/60">
        {completedItems} of {totalItems} items completed
      </div>
    </div>
  )
}
