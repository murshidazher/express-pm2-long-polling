module.exports = {
  apps: [
    {
      name: "express-pm2-long-polling",
      script: "server.js",
      instances: "2",
      watch: false,
      autorestart: true,
      wait_ready: true,
      exec_mode: "cluster",
      instance_var: "APP_INSTANCE_SEQ",
      listen_timeout: 5000,
      kill_timeout: 5000,
      restart_delay: 10000,
      max_memory_restart: "1G",
    }
  ]
};
