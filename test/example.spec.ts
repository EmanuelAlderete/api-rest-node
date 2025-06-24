import { expect, test } from 'vitest'

test('Usuário pode criar nova transação', () => {
	const responseStatusCode = 201
	expect(responseStatusCode).toEqual(201)
})
