module.exports = {
  apps: [
    {
      name: 'nest-app-staging',
      script: 'dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'staging',
      },
    },
  ],
};
