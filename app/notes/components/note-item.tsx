'use client';

// import dynamic from 'next/dynamic';
// const MotionDiv = dynamic(() =>
//   import('framer-motion').then(mod => mod.motion.div),
//   { ssr: false }
// );


import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote, summarizeNote } from '../actions';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Trash2, Sparkles, Edit } from 'lucide-react';
import { format } from 'date-fns';
import NoteForm from './note-form';
import { toast } from 'react-hot-toast';
// import { motion } from 'framer-motion';

export default function NoteItem({ note, userId }: { note: any; userId: string }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [summary, setSummary] = useState<string | null>(note.summary);

  const deleteMutation = useMutation({
    mutationFn: () => deleteNote(note.id),
    onSuccess: () => {
      queryClient.invalidateQueries(['notes', userId]);
      toast.success('Note deleted successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const summarizeMutation = useMutation({
    mutationFn: () => summarizeNote(note.id, note.content),
    onSuccess: (data) => {
      setSummary(data.summary);
      toast.success('Note summarized successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return (
    <Card className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-200">
      {isEditing ? (
        <NoteForm
          userId={userId}
          note={note}
          onSuccess={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-white">{note.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {format(new Date(note.created_at), 'MMM dd, yyyy')}
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  <DropdownMenuItem 
                    onClick={() => setIsEditing(true)}
                    className="text-gray-300 hover:bg-gray-700"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => deleteMutation.mutate()}
                    className="text-red-400 hover:bg-gray-700"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-gray-300">{note.content}</p>
            {summary && (
              <div>
                <h3 className="font-medium text-primary-400 mb-2">AI Summary</h3>
                <p className="text-gray-300">{summary}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              onClick={() => summarizeMutation.mutate()}
              disabled={summarizeMutation.isPending}
              className="text-primary-400 border-primary-600 hover:bg-primary-900/30"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {summarizeMutation.isPending ? 'Summarizing...' : 'Summarize'}
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}