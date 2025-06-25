import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'

import { transationsRoutes } from './routes/transactions'

export const app = fastify()

app.register(fastifyCookie)

app.register(transationsRoutes, {
	prefix: 'transactions',
})
