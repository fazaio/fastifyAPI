const db = require('../db')

async function unAuth(fastify, opts) {
    fastify.post("/api/signin", async function(req, reply) {
        
        let username    =   req.body.username
        let password    =   req.body.password
        let sql         =   `SELECT * FROM users WHERE username = ?`;

        let data    =   await new Promise((resolve)=>{
            db.query(sql,[username], function(err, rows){
                if(err){
                    reply.send('Ada kesalahan')
                }
                if(rows.length > 0){
                    let veify   =   password === rows[0].password
                    
                    const token = fastify.jwt.sign({ 'user': username })

                    let data    =   {
                        status: 'success',
                        'token': token
                    }

                    return veify ? resolve(data) : resolve(false)
                }else{
                    resolve(false)
                }
            })
        })

        if(!data){
            reply.send('email/password salah')
        }
        reply.send(data)
    })
    fastify.post('/api/signup', async function (req, rep){
        rep.send({
            status: 'success',
            message: req.body.data
        })
    })
    fastify.post('/api/data/', async function (req, rep){
        rep.send('put data to DB')
    })
    fastify.get('/api/data/put', async function (req, rep){
        rep.send('put data to DB')
    })
}

module.exports = unAuth