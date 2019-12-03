var enderecoFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/endereco";

  var _cadastrar = function(endereco) {
    return $http.post(_path, endereco)
  };

  var _atualizar = function(endereco) {
    return $http.put(_path, endereco)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("enderecoApi", enderecoFactory);
