let campusController = function($scope, campusApi, $mdToast, $state) {

    $scope.campus = {}

    $scope.cadastrar = function() {

      let campus = angular.copy($scope.campus);






      campusApi.cadastrar(campus)
        .then(function(response) {
          var toast = $mdToast.simple()
              .textContent('O Campus foi cadastrado com sucesso!')
              .position('top right')
              .action('OK')
              .hideDelay(6000);
          $mdToast.show(toast);

          limparFormulario();

          // Redirecionamento de página.
          $state.transitionTo('campi', {reload: true, inherit: false, notify: true});
        })
        .catch(function(error) {
          var toast = $mdToast.simple()
              .textContent('Algum problema ocorreu no envio dos dados.')
              .position('top right')
              .action('OK')
              .hideDelay(6000);
          $mdToast.show(toast);
        });
    };
    let limparFormulario = function () {

          // Reinicializa a variável.
          angular.copy({}, $scope.campus);

          // Reinicializa o estado do campo para os eventos e validação.
          // É necessário indicar o atributo name no formulário <form>
          $scope.campusForm.$setPristine();
          $scope.campusForm.$setUntouched();
          $scope.campusForm.$setValidity();
      }
}

app.controller("CampusController", campusController);
