const { spec, request } = require('pactum')

describe('withCookies', () => {
    request.setDefaultTimeout(9000)
    it('Testando request "withCookies"', async () => {
        await spec()
            .get('https://httpbin.org/cookies')
            .withHeaders({
                'Content-Type': 'application/json'
            })
            .withCookies('user', 'pass')
            .expectStatus(200);
    })
})
