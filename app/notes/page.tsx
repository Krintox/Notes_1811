import Header from '@/components/header';
import NoteList from './components/note-list';
import getUserSession from '@/lib/getUserSession';
import { redirect } from 'next/navigation';

export default async function NotesPage() {
  const { data: { session } } = await getUserSession();

  if (!session) {
    return redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            My Notes
          </h1>
          <NoteList userId={session.user.id} />
        </div>
      </main>
    </div>
  );
}