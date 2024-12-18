import { AuthForm } from '@/components/AuthForm'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-text">
          Welcome to ListShare
        </h1>
        <AuthForm />
      </div>
    </main>
  )
}
