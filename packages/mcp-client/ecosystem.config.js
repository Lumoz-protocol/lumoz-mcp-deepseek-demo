module.exports = {
  apps: [
    {
      name: 'mcp-client',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        PORT: 10052,
        NODE_ENV: 'production'
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G'
    }
  ]
} 