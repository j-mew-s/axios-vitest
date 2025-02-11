import { expect, test } from 'vitest'
import axios from 'axios'
import https from 'https'

test('Use an instance to send a request to localhost', async () => {
  const instance = axios.create({
    baseURL: 'https://localhost:3000',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
  })

  const response = await instance.get('/')
  expect(response.status).toBe(200)
})