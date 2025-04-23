import Header from '@/components/header';
import getUserSession from '@/lib/getUserSession';
import { redirect } from 'next/navigation';
import { Card } from '@/components/ui/card';

export default async function ProfilePage() {
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect('/login');
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 p-6">
            <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-8">
              Your Profile
            </h1>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium">ID:</span>
                <span className="text-gray-400">{user.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium">Role:</span>
                <span className="text-gray-400">{user.role}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium">Email:</span>
                <span className="text-gray-400">{user.email}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium">Provider:</span>
                <span className="text-gray-400">{user.app_metadata['provider']}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium">Created At:</span>
                <span className="text-gray-400">
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}