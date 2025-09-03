<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a NestJS + Supabase template for building scalable server-side applications with TypeScript, JWT authentication, logging, and more.

---

## Requirements

- Node.js >= 18.x
- npm >= 9.x
- Supabase CLI ([docs](https://supabase.com/docs/guides/cli))
- (Recommended) Docker (for running Supabase locally)

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

| Variable              | Description                       |
|-----------------------|-----------------------------------|
| NODE_ENV              | Environment (local, development)  |
| LOG_FORMAT            | text or json                      |
| PORT                  | Port to run the server            |
| SUPABASE_PROJECT_ID   | Supabase project ID               |
| SUPABASE_URL          | Supabase API URL                  |
| SUPABASE_ANON_KEY     | Supabase anon/public key          |

## Installation

```bash
npm install
```

## Supabase Local Setup

To run Supabase locally for development:

1. Install Supabase CLI (if not installed):
  ```bash
  npm install -g supabase
  ```
2. Start Supabase local development:
  ```bash
  supabase start
  ```
  This will start Supabase locally with Postgres, Auth, Storage, and other services.
3. (Optional) Stop Supabase:
  ```bash
  supabase stop
  ```

Refer to [Supabase CLI docs](https://supabase.com/docs/guides/cli/local-development) for more details.

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Lint & Format

```bash
npm run lint
npm run format
```

## Generate Supabase Types

```bash
npm run supabase:types
```

## Folder Structure

- `src/` - Main source code
- `src/auth/` - Auth module (JWT, guards, strategies)
- `src/common/` - Common utilities, logger, supabase service
- `src/config/` - Environment config
- `src/modules/` - features modules
- `src/utils/` - Utilities and filters
- `scripts/` - Utility scripts (e.g., type generation)

## License

MIT

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash

# watch mode
$ npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Using Docker

You can run the application in a Docker container for local development or production. Make sure you have Docker installed.

### Build the Docker image
```bash
docker build -t nestjs-template .
```

### Run the container
```bash
docker run --env-file .env -p 3000:3000 nestjs-template
```

This will start the app on port 3000 (or the port specified in your `.env`).

## Using PM2

PM2 is a process manager for Node.js applications. You can use it to run and manage your NestJS app in production or development.

### Install PM2 globally
```bash
npm install -g pm2
```

### Start the app with PM2
```bash
pm2 start ecosystem-production.config.js
```

Or for staging:
```bash
pm2 start ecosystem-staging.config.js
```

### Monitor and manage
```bash
pm2 status
pm2 logs
pm2 restart <app-name>
pm2 stop <app-name>
```

Refer to the [PM2 documentation](https://pm2.keymetrics.io/) for more options.
