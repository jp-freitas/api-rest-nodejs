import fastify from 'fastify'
// import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async (request, response) => {
  const transactions = await knex('transactions')
    .where('session_id', 'bcc481a8-9af0-4066-ab15-b25073bfcac9')
    .select('*')
  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is running!')
  })
