'use client';

// import dynamic from 'next/dynamic';
// const MotionDiv = dynamic(() =>
//   import('framer-motion').then(mod => mod.motion.div),
//   { ssr: false }
// );

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote, updateNote } from '../actions';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { noteSchema, type NoteInput } from '@/lib/schemas/note-schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';
// import { motion } from 'framer-motion';

export default function NoteForm({
  userId,
  note,
  onSuccess,
  onCancel,
}: {
  userId: string;
  note?: any;
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const queryClient = useQueryClient();
  const form = useForm<NoteInput>({
    resolver: zodResolver(noteSchema),
    defaultValues: note || {
      title: '',
      content: '',
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: NoteInput) => createNote(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', userId] });
      toast.success('Note created successfully');
      onSuccess();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: NoteInput) => updateNote(note.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', userId] });
      toast.success('Note updated successfully');
      onSuccess();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: NoteInput) => {
    if (note) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Title</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Note title" 
                    {...field} 
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your note here..."
                    rows={6}
                    {...field}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              className="text-gray-300 border-gray-600 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-primary-600 hover:bg-primary-700"
            >
              {note ? 'Update' : 'Create'} Note
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}