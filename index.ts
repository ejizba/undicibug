import { request } from 'undici'

async function start() {
    const {
        statusCode,
        headers,
        trailers,
        body
    } = await request('http://localhost:3000/foo')

    console.log('response received', statusCode)
    console.log('headers', headers)

    for await (const data of body) {
        console.log('data', data)
    }

    console.log('trailers', trailers)
}

start();