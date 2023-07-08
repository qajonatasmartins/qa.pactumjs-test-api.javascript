const { spec, request } = require('pactum')

describe('withAuth', () => {

    it('Testando request "withAuth"', async () => {
        request.setDefaultTimeout(9000)
        await spec()
            .get('https://httpbin.org/basic-auth/user/pass')
            .withAuth('user', 'pass')
            .withHeaders({
                'Content-Type': 'application/json'
            })
            .expectStatus(200);
    })
})
