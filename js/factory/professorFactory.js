var professorFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/professor";

  var _cadastrar = function(professor) {
    return $http.post(_path, professor)
  };

  var _atualizar = function(professor) {
    return $http.put(_path, professor)
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

app.factory("professorApi", professorFactory);
