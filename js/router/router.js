app.config(function ($routeProvider, $locationProvider) {

    // Remover a exclamação (!) da URL
    var SEM_PREFIXO = '';
    $locationProvider.hashPrefix(SEM_PREFIXO);

    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);

    // Atualizar os módulos passados no app.js adicionando o 'ui.router'.
    // Mover todas as rotas já definidas no router.js para o arquivo state.js.
    // Verificar o modelo utilizado para o $stateProvider presente no state.js que é diferente.
    // Não esquecer de importar no index o script state.js .
    // Mudar no index.html o atributo ng-view para o ui-view.
    $routeProvider
      .when('/', {
        templateUrl : 'home.html',
        controller  : 'HomeController'
      })
      .when('/aluno', {
        templateUrl : 'aluno.html',
        controller  : 'AlunoController'
      })
      .when('/endereco', {
        templateUrl : 'endereço.html',
        controller  : 'EnderecoController'
      })
      .when('/escola', {
        templateUrl : 'escola.html',
        controller  : 'EscolaController'
      })
      .when('/professor', {
        templateUrl : 'professor.html',
        controller  : 'ProfessorController'
      })
      .when('/campus', {
        templateUrl : 'campus.html',
        controller  : 'CampusController'
      })
      .when('/turno', {
        templateUrl : 'turno.html',
        controller  : 'TurnoController'
      })
      .when('/curso', {
        templateUrl : 'curso.html',
        controller  : 'CursoController'
      })
      .when('/disciplina', {
        templateUrl : 'disciplina.html',
        controller  : 'DisciplinaController'
      })
      .when('/turma', {
        templateUrl : 'turma.html',
        controller  : 'TurmaController'
      })
    .otherwise({redirectTo: '/'});
});
