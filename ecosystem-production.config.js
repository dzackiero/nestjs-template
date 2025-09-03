module.exports = {
  apps: [
    {
      name: 'nest-app-production',
      script: 'dist/main.js',
      instances: 3,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
