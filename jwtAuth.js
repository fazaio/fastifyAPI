const fastifyJwt = require('fastify-jwt')
const fp = require('fastify-plugin')

async function customJwtAuth(fastify, opts, next) {
  fastify.register(fastifyJwt, { secret: 'ererer' })
  fastify.decorate('authenticate', async function (request, reply) {
    try {
      // to whatever you want, read the token from cookies for example..
      const token = request.headers.authorization
      await request.jwtVerify()
    } catch (err) {
      let data = {
        status : 'failed',
        message: 'Silahkan login terlebih dahulu!'
      }
      reply.send(data)
    }
  })
}

module.exports = fp(customJwtAuth, { fastify: '>=1.0.0' })