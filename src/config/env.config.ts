import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export enum Environment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Staging = 'staging',
}

export enum LogFormat {
  Text = 'text',
  Json = 'json',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsEnum(LogFormat)
  @IsOptional()
  LOG_FORMAT: LogFormat = LogFormat.Text;

  @IsNumber()
  PORT: number;

  @IsString()
  SUPABASE_PROJECT_ID: string;

  @IsString()
  SUPABASE_URL: string;

  @IsString()
  SUPABASE_SERVICE_KEY: string;
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
