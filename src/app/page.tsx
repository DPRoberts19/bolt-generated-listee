import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/components/LoginForm'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-text">
          Welcome to ListShare
        </h1>
        <LoginForm />
      </div>
    </main>
  )
}
