import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      lists: {
        create: [
          {
            title: 'Shopping List',
            shareUrl: 'shopping-list-123',
            items: {
              create: [
                { content: 'Milk', completed: false },
                { content: 'Bread', completed: true },
              ],
            },
          },
          {
            title: 'Todo List',
            shareUrl: 'todo-list-456',
            items: {
              create: [
                { content: 'Learn React Native', completed: false },
                { content: 'Build an app', completed: false },
              ],
            },
          },
        ],
      },
    },
    include: {
      lists: {
        include: {
          items: true,
        },
      },
    },
  })
  
  console.log('Seed data created:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
