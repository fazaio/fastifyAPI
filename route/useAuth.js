async function useAuth(fastify, opts) {
    fastify.addHook('onRequest', fastify.authenticate)
    fastify.get("/profiledata", async function (request, reply) {
        reply.send({ 'userData': 'lorem ipsum' })
    })
}
module.exports = useAuth