module.exports = {
  apps: [
    {
      name: 'express-pm2-long-polling',
      script: 'server.js',
      instances: 'max',
      wait_ready: true,
      exec_mode: 'cluster',
      exp_backoff_restart_delay: 100,
      shutdown_with_message: true,
      kill_timeout: 10000,
      listen_timeout: 10000,
      instance_var: 'APP_INSTANCE_SEQ',
      max_memory_restart: '2G',
      cwd: './src',
      env: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
