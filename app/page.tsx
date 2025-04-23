import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1>
            AI-Powered Notes App
          </h1>
          <p>
            Organize your thoughts with our beautiful dark-themed notes application featuring AI summarization.
          </p>
          <div className="flex gap-4 justify-center"
          >
            <Button asChild className="bg-primary-600 hover:bg-primary-700 px-6 py-3">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 px-6 py-3">
              <Link href="/notes">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}