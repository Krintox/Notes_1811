'use client';

import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from '../_actions';
import toast from 'react-hot-toast';
import useSupabaseClient from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { motion } from 'framer-motion';

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const supabase = useSupabaseClient();

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(values);

      const { error } = JSON.parse(result);
      if (error?.message) {
        setError(error.message);
        toast.error(error.message);
        reset({ password: '' });
        return;
      }

      setError('');
      toast.success('Successfully logged in');
      router.push('/');
    });
  };

  const loginWithGitHub = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      {error && (
        <div>
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Email</label>
        <Input
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Password</label>
        <Input
          type="password"
          {...register('password')}
          placeholder="••••••••"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.password && (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary-600 hover:bg-primary-700"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-400">OR CONTINUE WITH</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={loginWithGoogle}
          className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          Google
        </Button>
      </div>
    </form>
  );
};