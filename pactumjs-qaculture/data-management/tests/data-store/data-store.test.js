const { spec } = require('pactum')

describe('Data-Store PactumJS', () => {

  it('Deve retornar todas as postagens e a primeira postagem Deve ter comentários', async () => {
    await spec()
      .get('http://jsonplaceholder.typicode.com/posts')
      .expectStatus(200)
      .stores('FirstPostId', '[0].id')
      .stores('SecondPostId', '[1].id');

    /** Response
     [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      }]
     */

    await spec()
      .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
      .withPathParams('id', '$S{FirstPostId}')
      .expectStatus(200)

    await spec()
      .get(`http://jsonplaceholder.typicode.com/posts/{id}/comments`)
      .withPathParams('id', '$S{SecondPostId}')
      .expectStatus(200)
  })
})
