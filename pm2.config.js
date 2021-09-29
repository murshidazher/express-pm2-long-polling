module.exports = {
  name: "express-pm2-long-polling",
  script: "server.js",
  instances: "max",
  watch: false,
  autorestart: true,
  wait_ready: true,
  exec_mode: "cluster",
  instance_var: "APP_INSTANCE_SEQ",
  listen_timeout: 10000,
  restart_delay: 10000,
}
