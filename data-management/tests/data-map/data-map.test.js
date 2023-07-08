const { stash, spec } = require('pactum')

stash.addDataMap({
    'other': {
        'name': 'jonatas',
        'job': 'qa lead'
    }
})

stash.addDataTemplate({
    'Address': {
        "street": "society road",
        "pin": 500500
    }
})

stash.addDataTemplate({
    'User': {
        "name": "$M{other.name}", /** Pegou o valor de 'jonatas' e atribuiu no lugar de '$M{other.name}' */
        "job": "$M{other.job}",/** Pegou o valor de 'qa lead' e atribuiu no lugar de '$M{other.job}' */
        "address": {
            "@DATA:TEMPLATE@": "Address", /** Adicionou o template de 'Address' */
        }
    }
})

/**
 * Quando um modelo de dados é usado, o objeto atual será substituído.
 * Quando um mapa de dados é usado, o valor da propriedade do objeto atual será substituído.
 */

describe('Usando Data Map PactumJS', () => {

    it('Deve registrar um usuário usando REMOVES Data-Template e Data Map', async () => {
        await spec()
            .post('https://httpbin.org/anything')
            .withJson({
                '@DATA:TEMPLATE@': 'User', /** Usou o template de User, mas ... */
                '@REMOVES@': ['job'] /** Apagou o atributo 'Job' */
            })
            .expectStatus(200)
            .expectBodyContains({
                address: { pin: 500500, street: 'society road' },
                name: 'jonatas'
            })
    })
})