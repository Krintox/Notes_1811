'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
    };

    checkSession();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  const logoutAction = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 h-20 sticky top-0 z-50">
      <nav className="h-full flex justify-between container items-center px-4">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              AetherNotes
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
              Home
            </Link>
          </li>
          {session && (
            <li>
              <Link href="/notes" className="text-gray-300 hover:text-primary-400 transition-colors">
                Notes
              </Link>
            </li>
          )}
          {!session && !isLoading && (
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
          {session && (
            <div className="flex items-center gap-4">
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Profile
                </Link>
              </li>
              <Button 
                type="button" 
                onClick={logoutAction}
                variant="outline" 
                className="text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
              >
                Logout
              </Button>
            </div>
          )}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900 border-t border-gray-800 py-4 px-6 shadow-lg">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              {session && (
                <li>
                  <Link 
                    href="/notes" 
                    className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    Notes
                  </Link>
                </li>
              )}
              {!session && !isLoading && (
                <>
                  <li>
                    <Link 
                      href="/register" 
                      className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/login" 
                      className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              {session && (
                <>
                  <li>
                    <Link 
                      href="/profile" 
                      className="block text-gray-300 hover:text-primary-400 transition-colors py-2"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Button 
                      type="button" 
                      onClick={() => {
                        logoutAction();
                        toggleMenu();
                      }}
                      variant="outline" 
                      className="w-full text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
                    >
                      Logout
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;