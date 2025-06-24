import fastify from 'fastify'
import { env } from './env'
import { transationsRoutes } from './routes/transactions'
import fastifyCookie from '@fastify/cookie'

const app = fastify()
app.register(fastifyCookie)
app.register(transationsRoutes, {
  prefix: 'transactions',
})

app
  .listen({ port: env.PORT })
  .then(() => console.log('Server is running on http://localhost:3333/hello'))
