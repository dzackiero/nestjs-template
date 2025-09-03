import { AuthUser } from '@supabase/supabase-js';

export type User = Omit<AuthUser, 'user_metadata'> & {
  user_metadata: {
    full_name?: string | null;
    email_verified?: boolean | null;
  };
};
