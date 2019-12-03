var escolaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/escola";

  var _cadastrar = function(escola) {
    return $http.post(_path, escola)
  };

  var _atualizar = function(escola) {
    return $http.put(_path, escola)
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

app.factory("escolaApi", escolaFactory);
