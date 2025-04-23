import Link from 'next/link';
import getUserSession from '@/lib/getUserSession';
import createSupabaseServerClient from '@/lib/supabase/server';
import { Button } from './ui/button';
// import { motion } from 'framer-motion';

const Header = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    'use server';
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 h-20 sticky top-0 z-50">
      <nav className="h-full flex justify-between container items-center">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              AI Notes
            </span>
          </Link>
        </div>
        
        <ul 
          className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
              Home
            </Link>
          </li>
          {data.session && (
            <li>
              <Link href="/notes" className="text-gray-300 hover:text-primary-400 transition-colors">
                Notes
              </Link>
            </li>
          )}
          {!data.session && (
            <>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
            </>
          )}
          {data.session && (
            <form action={logoutAction} className="flex items-center gap-4">
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Profile
                </Link>
              </li>
              <Button 
                type="submit" 
                variant="outline" 
                className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              >
                Logout
              </Button>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;