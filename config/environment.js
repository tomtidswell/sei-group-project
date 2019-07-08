const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'shhh its a secret'
const env = process.env.NODE_ENV || 'dev'
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/buddle-lab-${process.env.NODE_ENV || 'dev'}`
//console.log(dbURI, env)
module.exports = { port, dbURI, secret, env }
