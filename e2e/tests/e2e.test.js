const { e2e, mock, settings } = require('pactum')

function mockAPI() {

    mock.addInteraction({
        request: {
            method: 'POST',
            path: '/api/users',
            body: {
                name: "snow"
            }
        },
        response: {
            status: 200,
            body: {
                name: "snow"
            }
        }
    })

    mock.addInteraction({
        request: {
            method: 'GET',
            path: '/api/users/snow'
        },
        response: {
            status: 200,
            body: {
                name: "snow"
            }
        }
    })
}

describe('Teste end-2-End', () => {

    let test_case = e2e('Adicionar Usuario')

    mockAPI()

    before(async () => {
        settings.setLogLevel('ERROR')
        await mock.start(9877)
    })

    it('Criar Usuario', async () => {
        await test_case.step('Criar Usuario')
            .spec()
            .post('http://localhost:9877/api/users')
            .withJson({
                "name": "snow"
            })
            .expectStatus(200)
    })

    it('Buscar Usuario', async () => {
        await test_case.step('Buscar Usuario')
            .spec()
            .get('http://localhost:9877/api/users/snow')
            .expectStatus(200)
            .expectJson({
                "name": "snow"
            })
    })

    after(async () => {
        await mock.stop()
    })
});