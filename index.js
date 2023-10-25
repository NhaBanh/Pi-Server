const https = require('https')
const express = require('express')

const { default: ServerOptions } = require('./src/config/serverOptions')

const app = express()

https
  .createServer(ServerOptions, app)
  .listen(4000, () => {
    console.log('serever is runing at port 4000')
  })

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/omergulen', (req, res) => {
  res.send('Hello Omer! Welcome to dev.to!')
})
