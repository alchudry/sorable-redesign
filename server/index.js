const fastify = require('fastify')({
  logger: true
})
const mongoose = require('mongoose')

// DB Constanta
const dbUrl = 'mongodb://localhost/sorabel'
const dbOption =  {
  useNewUrlParser: true
}
// Connect to DB
mongoose.connect(dbUrl, dbOption).then(() => {
  console.log('MongoDB connected…')
}).catch((err) => {
  console.log(err)
})

// Import Route
const routes = require('./routes')

routes.forEach((route, index) => {
  fastify.route(route)
})

const startServer = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
startServer()