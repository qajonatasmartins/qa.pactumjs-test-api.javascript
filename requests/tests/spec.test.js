const { spec } = require('pactum')

describe('Spec', () => {

    it('Testando request "spec"', async () => {
        await spec()
            .get('https://reqres.in/api/users/1')
            .expectStatus(200)

    })
})
