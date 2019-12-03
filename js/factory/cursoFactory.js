var cursoFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/curso";

  var _cadastrar = function(curso) {
    return $http.post(_path, curso)
  };

  var _atualizar = function(curso) {
    return $http.put(_path, curso)
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

app.factory("cursoApi", cursoFactory);
