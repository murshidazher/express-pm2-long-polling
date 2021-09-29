module.exports = {
  name: "express-pm2-long-polling",
  script: "server.js",
  instances: "2",
  watch: true,
  ignore_watch : ["node_modules"],
  exec_mode: "cluster",
  instance_var: "APP_INSTANCE_SEQ",
  listen_timeout: 10000,
  cwd: ".",
  env: {
    PM2_SERVE_PATH: '.',
    PM2_SERVE_PORT: 8090,
  }
}
