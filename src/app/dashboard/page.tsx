import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { ListGrid } from '@/components/ListGrid'
import { NewListButton } from '@/components/NewListButton'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/')
  }

  const lists = await prisma.list.findMany({
    where: {
      OR: [
        { ownerId: session.user.id },
        { sharedWith: { some: { id: session.user.id } } }
      ]
    },
    include: {
      items: true,
      sharedWith: true
    }
  })

  return (
    <main className="min-h-screen p-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-text">Your Lists</h1>
          <NewListButton />
        </div>
        <ListGrid lists={lists} />
      </div>
    </main>
  )
}
