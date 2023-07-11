const { stash } = require('pactum'),
    { _spec } = require('../../constants')

stash.addDataTemplate({
    'Address': {
        "street": "society road",
        "pin": 500500
    }
})

stash.addDataTemplate({
    'User': {
        "name": "morpheus",
        "job": "leader",
        "address": {
            "@DATA:TEMPLATE@": "Address", /** Adicionou o template de 'Address' */
        }
    }
})

describe('Usando Data-Template PactumJS', () => {

    it('Deve registrar um usuário usando REMOVES Data-Template', async () => {
        await _spec()
            .post('/api/users')
            .withJson({
                '@DATA:TEMPLATE@': 'User',
                '@REMOVES@': ['job'] /** Apagou o atributo 'Job' no envio do payload */
            })
            .expectStatus(201)
            .expectJsonLike({
                name: 'morpheus'
            })
    })
})