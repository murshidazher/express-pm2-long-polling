module.exports = {
  apps: [
    {
      name: 'express-pm2-long-polling',
      // script: 'server.js',
      script: 'npm',
      args: 'start:dev',
      instances: 'max',
      wait_ready: true,
      exec_mode: 'cluster',
      automation: false,
      exp_backoff_restart_delay: 10,
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
