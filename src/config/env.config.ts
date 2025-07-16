import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export enum Environment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Staging = 'staging',
}

class EnvironmentVariables {
  NODE_ENV: Environment;
  PORT: number;

  SUPABASE_PROJECT_ID: string;
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
