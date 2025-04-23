'use client';

// import dynamic from 'next/dynamic';
// const MotionDiv = dynamic(() =>
//   import('framer-motion').then(mod => mod.motion.div),
//   { ssr: false }
// );

import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../actions';
import NoteItem from './note-item';
import NoteForm from './note-form';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
// import { motion } from 'framer-motion';

export default function NoteList({ userId }: { userId: string }) {
  const [isCreating, setIsCreating] = useState(false);
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['notes', userId],
    queryFn: () => getNotes(userId),
  });

  if (isLoading) return (
    <div className="flex justify-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="text-red-400 text-center py-8">
      Error loading notes
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <Button 
          onClick={() => setIsCreating(true)}
          className="bg-primary-600 hover:bg-primary-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Note
        </Button>
      </div>

      {isCreating && (
        <NoteForm
          userId={userId}
          onSuccess={() => setIsCreating(false)}
          onCancel={() => setIsCreating(false)}
        />
      )}

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes?.map((note) => (
        <div key={note.id}>
          <NoteItem note={note} userId={userId} />
        </div>
      ))}
    </div>
    </div>
  );
}