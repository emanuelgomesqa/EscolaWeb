var turnoFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/turno";

  var _cadastrar = function(turno) {
    return $http.post(_path, turno)
  };

  var _atualizar = function(aluno) {
    return $http.put(_path, turno)
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

app.factory("turnoApi", turnoFactory);
