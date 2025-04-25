// components/cta-section.tsx (Client Component)
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-900/30 to-primary-700/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Note-Taking?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already boosting their productivity with AetherNotes.
        </p>
        <Button 
          asChild 
          className="bg-primary-600 hover:bg-primary-700 px-8 py-4 text-lg transition-all hover:scale-105 shadow-lg"
        >
          <Link href="/register">Create Free Account</Link>
        </Button>
      </div>
    </section>
  );
}