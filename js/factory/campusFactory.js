var campusFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/campus";

  var _cadastrar = function(campus) {
    return $http.post(_path, campus)
  };

  var _atualizar = function(campus) {
    return $http.put(_path, campus)
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

app.factory("campusApi", campusFactory);
