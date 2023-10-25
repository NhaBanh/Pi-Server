const fs = require('fs')

const ServerOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

export default ServerOptions
