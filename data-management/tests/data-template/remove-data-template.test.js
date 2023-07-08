const { stash, spec } = require('pactum')

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
        await spec()
            .post('https://httpbin.org/anything')
            .withJson({
                '@DATA:TEMPLATE@': 'User', /** Usou o template de User, mas ... */
                '@REMOVES@': ['job'] /** Apagou o atributo 'Job' */
            })
            .expectStatus(200)
            .expectBodyContains({
                address: { pin: 500500, street: 'society road' },
                name: 'morpheus'
            })
    })
})