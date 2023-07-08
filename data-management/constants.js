const { request, stash, spec } = require('pactum'),
    _spec = spec

/** O '$M{variavel}' refere-se a um mapa de dados que carrega o conteúdo daquela váriavel*/
request.setBaseUrl('$M{Environments.Production}')
request.setDefaultTimeout(5000)
/** loadData - Carrega modelos de dados e mapas de dados do sistema de arquivos */
stash.loadData()

module.exports = {
    _spec
}