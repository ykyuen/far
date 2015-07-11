define(['./home.module'], function (home) {
  'use strict';
  
  home.config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/home/views/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
  };
});