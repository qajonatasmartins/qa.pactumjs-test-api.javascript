const { spec, request } = require('pactum')

describe('withQueryParams', () => {
    request.setDefaultTimeout(9000)
    it('Testando request "withQueryParams"', async () => {
        await spec()
            .get('https://randomuser.me/api')
            .withQueryParams('gender', 'male')
            .expectStatus(200)
    })
})
