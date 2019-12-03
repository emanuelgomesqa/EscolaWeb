var turmaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/turma";

  var _cadastrar = function(turma) {
    return $http.post(_path, turma)
  };

  var _atualizar = function(turma) {
    return $http.put(_path, turma)
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

app.factory("turmaApi", turmaFactory);
