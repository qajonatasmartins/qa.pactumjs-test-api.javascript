const { mock, settings, spec } = require('pactum')

function mockAPI() {

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/hello-world'
        },
        response: {
            status: 200,
            body: 'Olá, Mundo!'
        }
    })
}

describe('Mock', () => {

    beforeEach(async () => {

        settings.setLogLevel('ERROR')

        await mock.start(9876)
    })

    it('retornar uma resposta REST básica', async () => {

        mockAPI();

        await spec()
            .get('http://localhost:9876/api/hello-world')
            .expectStatus(200)
            .expectBody('Olá, Mundo!')
    })
    afterEach(async () => {
        await mock.stop()
    })
})

