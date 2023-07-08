const { spec, request } = require('pactum')

describe('withMethod e withPath', () => {
    request.setDefaultTimeout(9000)
    it('Testando request "withMethod e withPath"', async () => {
        await spec()
            .withMethod('GET')
            .withPath('https://reqres.in/api/users/1')
            .expectStatus(200)
    })
})
