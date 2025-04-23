'use server';

import createSupabaseServerClient from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { summarizeText } from '@/lib/api/deepseek'; // Changed from deepseek to gemini

export async function getNotes(userId: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function createNote(userId: string, noteData: any) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('notes')
    .insert([{ ...noteData, user_id: userId }])
    .select()
    .single();

  if (error) {
    throw error;
  }

  revalidatePath('/notes');
  return data;
}

export async function updateNote(noteId: string, noteData: any) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('notes')
    .update(noteData)
    .eq('id', noteId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  revalidatePath('/notes');
  return data;
}

export async function deleteNote(noteId: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from('notes').delete().eq('id', noteId);

  if (error) {
    throw error;
  }

  revalidatePath('/notes');
}

export async function summarizeNote(noteId: string, content: string) {
  const summary = await summarizeText(content);
  const supabase = await createSupabaseServerClient();
  
  const { data, error } = await supabase
    .from('notes')
    .update({ summary })
    .eq('id', noteId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  revalidatePath('/notes');
  return { summary, note: data };
}