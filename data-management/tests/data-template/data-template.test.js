const { stash } = require('pactum'),
    { _spec } = require('../../constants')

stash.addDataTemplate({
    'User': {
        "name": "morpheus",
        "job": "leader"
    }
})

describe('Usando Data-Template PactumJS', () => {

    it('Deve registrar um usuário usando DATA:TEMPLATE', async () => {
        await _spec()
            .post('/api/users')
            .withJson({
                '@DATA:TEMPLATE@': 'User',
            })
            .expectStatus(201)
            .expectJsonLike({
                name: 'morpheus',
                job: 'leader'
            })
    })
})