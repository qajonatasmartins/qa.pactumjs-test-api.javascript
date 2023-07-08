const { spec, request } = require('pactum')

describe('withCore', () => {
    request.setDefaultTimeout(9000)
    it('Testando request "withCore"', async () => {
        await spec()
            .get('https://httpbin.org/basic-auth/user/pass')
            .withCore({
                auth: 'user:pass'
            })
            .withHeaders({
                'Content-Type': 'application/json'
            })
            .expectStatus(200);
    })
})
