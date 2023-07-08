const { spec, request } = require('pactum')

describe('withPathParams', () => {
    request.setDefaultTimeout(9000)
    it.skip('Testando request "withPathParams"', async () => {
        await spec()
            .get('/api/users/{user_id}/accounts/{account_id}')
            .withPathParams('user_id', 1)
            .withPathParams('account_id', 'CY001001')
            .expectStatus(200)
    })
})
