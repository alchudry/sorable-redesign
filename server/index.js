const fastify = require('fastify')({
  logger: true
})
const fastcors = require('fastify-cors')
const fastswagger = require('fastify-swagger')
const mongoose = require('mongoose')
const swagger = require('./config/swagger')
const cors = require('./config/cors')

// Register Documentation with Swagger
fastify.register(fastswagger, swagger.options)

// Cors Config
fastify.register(fastcors, cors.options)

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
// Add all available route to App
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