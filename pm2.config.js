module.exports = {
  apps: [
    {
      name: 'unicon',
      script: 'dist/server.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
