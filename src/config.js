'use strict'

const prod = {
  authorizeUrl: 'https://my.onlyid.net/authorize',
  baseUrl: 'https://my.onlyid.net'
}

const dev = {
  authorizeUrl: 'http://onlyid2:3001/authorize',
  baseUrl: 'http://onlyid2:3001'
}

if (process.env.NODE_ENV !== 'production') {
  Object.assign(prod, dev)
}

export default prod
