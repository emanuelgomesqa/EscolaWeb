var alunoFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";
  var _path = baseUrl + "/aluno";

  var _cadastrar = function(aluno) {
    return $http.post(_path, aluno)
  };

  var _atualizar = function(aluno) {
    return $http.put(_path, aluno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(baseUrl + "/alunos")
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("alunoApi", alunoFactory);
