const { stash } = require('pactum'),
    { _spec } = require('../../constants')

stash.addDataTemplate({
    'User': {
        "name": "morpheus",
        "job": "leader"
    }
})

describe('Usando Data-Template PactumJS', () => {

    it('Deve registrar um usuário usando OVERRIDES Data-Template', async () => {
        await _spec()
            .post('/api/users')
            .withJson({
                '@DATA:TEMPLATE@': 'User',
                '@OVERRIDES@': { /** Usado o '@OVERRIDES@' para definir que aquele template vc quer subistituir somente o atributo job por 'meber' */
                    'job': 'member'
                }
            })
            .expectStatus(201)
            .expectJsonLike({
                name: 'morpheus',
                job: 'member'
            })
    })
})