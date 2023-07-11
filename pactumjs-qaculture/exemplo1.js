const { spec } = require('pactum')

describe('Exemplo 01', ()=>{

  it('deve obter uma resposta com o código de status 200', async () => {
    await spec()
      .get('http://httpbin.org/status/200') /** Pode usar direto o get ou se quiser o withMethod */
      .expectStatus(200)
  })
})

