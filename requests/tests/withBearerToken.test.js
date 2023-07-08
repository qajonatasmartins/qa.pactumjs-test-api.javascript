const { spec, request } = require('pactum')

describe('withBearerToken', () => {
    request.setDefaultTimeout(9000)

    it('Testando request "withBearerToken"', async () => {
        await spec()
            .get('https://httpbin.org/bearer')
            .withBearerToken('my-token')
            .withHeaders({
                'Content-Type': 'application/json'
            })
            .expectStatus(200)
    })
})
