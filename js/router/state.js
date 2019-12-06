/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/home");

    // Estados
    $stateProvider
      // Home
      .state('home', {
        url: '/home',
        title: 'CUME - Página Inicial',
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .state('aluno', {
        url: '/aluno',
        title: 'CUME - Cadastrar Aluno',
        templateUrl: 'aluno.html',
        controller: 'AlunoController'
      })
      .state('alunos', {
        url: '/alunos',
        title: 'CUME - Listar Alunos',
        templateUrl: 'alunos.html',
        controller: 'AlunosController'
      })

      .state('campus', {
        url: '/campus',
        title: 'CUME - Cadastrar Campus',
        templateUrl: 'campus.html',
        controller: 'CampusController'
      })
      .state('campi', {
        url: '/campi',
        title: 'CUME - Listar Campi',
        templateUrl: 'campi.html',
        controller: 'CampiController'
      })
  })
  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }

      return doc.label || doc.name;
    }
  });