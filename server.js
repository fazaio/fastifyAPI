// require
const fastify   = require('fastify')({ logger: true })
const unAuth    = require('./route/unAuth')
const useAuth   = require('./route/useAuth')
const jwtAuth   = require('./jwtAuth')


//register plugin
fastify.register(require('fastify-formbody'));
fastify.register(jwtAuth)
fastify.register(useAuth)
fastify.register(unAuth)


fastify.listen(3000)