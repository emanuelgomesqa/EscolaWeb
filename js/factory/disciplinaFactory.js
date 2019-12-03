var disciplinaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/disciplina";

  var _cadastrar = function(disciplina) {
    return $http.post(_path, disciplina)
  };

  var _atualizar = function(disciplina) {
    return $http.put(_path, disciplina)
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

app.factory("disciplinaApi", disciplinaFactory);
