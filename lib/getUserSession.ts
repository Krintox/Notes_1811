'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function getUserSession() {
  const supabase = createServerComponentClient({ cookies });
  return await supabase.auth.getSession();
}