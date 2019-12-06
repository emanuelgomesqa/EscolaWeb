var campiController = function($scope, $mdToast, campusApi) {

  $scope.campi = [];

  let listar = function() {
      campiApi.listar(nome)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      campiApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.apresentacoes = [];
  };

}

app.controller('CampiController', campiController);
