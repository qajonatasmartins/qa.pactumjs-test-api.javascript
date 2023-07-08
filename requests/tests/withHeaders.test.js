const { spec, request } = require('pactum')

describe('withHeaders', () => {
    request.setDefaultTimeout(9000)
    it('Testando request "withHeaders"', async () => {
        await spec()
            .get('https://httpbin.org/bearer')
            .withHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer abc'
            })
            .expectStatus(200)
    })
})
