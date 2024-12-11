import { PrismaClient } from '@prisma/client'
import { groceryItems, listNames } from './seedData.js'

const prisma = new PrismaClient()

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function generateUniqueItems(count) {
  return shuffleArray([...groceryItems]).slice(0, count).map(item => ({
    content: item,
    completed: Math.random() > 0.7
  }))
}

async function main() {
  // Create test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      lists: {
        create: listNames.map((list, index) => ({
          title: list.title,
          shareUrl: `list-${index + 1}-${Date.now()}`,
          items: {
            create: generateUniqueItems(25)
          }
        }))
      }
    },
    include: {
      lists: {
        include: {
          items: true
        }
      }
    }
  })

  console.log('Created user with', user.lists.length, 'lists')
  user.lists.forEach(list => {
    console.log(`- ${list.title}: ${list.items.length} items`)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
