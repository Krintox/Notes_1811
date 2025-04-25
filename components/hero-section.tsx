// components/hero-section.tsx (Client Component)
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HERO_IMAGE = "https://mrwallpaper.com/images/thumbnail/dark-purple-lights-h472i7rf9dlsqtov.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 z-0"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              AetherNotes
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Your thoughts, organized and <span className="text-primary-400">AI-powered</span> for maximum productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary-600 hover:bg-primary-700 px-8 py-4 text-lg transition-all hover:scale-105">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" className="text-gray-300 border-gray-600 hover:bg-gray-700 px-8 py-4 text-lg transition-all hover:scale-105">
              <Link href="/notes">View Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}