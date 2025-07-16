import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SupabaseService } from 'src/common/services/supabase.service';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async login(request: LoginDto) {
    const { data, error } =
      await this.supabaseService.client.auth.signInWithPassword({
        email: request.email,
        password: request.password,
      });

    if (error) {
      throw new UnauthorizedException(error, {
        description: 'Login failed. Please check your credentials.',
        cause: error,
      });
    }

    return data;
  }
}
