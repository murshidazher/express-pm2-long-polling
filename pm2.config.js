module.exports = {
  apps: [
    {
      name: "express-pm2-long-polling",
      script: "server.js",
      instances: "2",
      autorestart: true,
      wait_ready: true,
      exec_mode: "fork",
      exp_backoff_restart_delay: 1000,
      shutdown_with_message: true,
      kill_timeout: 60000,
      instance_var: "APP_INSTANCE_SEQ",
      listen_timeout: 10000,
      max_memory_restart: "1G",
    }
  ]
};
