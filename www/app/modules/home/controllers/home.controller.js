define(['../home.module'], function (home) {
  'use strict';
  
  home.controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.awesomeThings = [
      'Foundation 5',
      'AngularJS',
      'RequireJS'
    ];
  }
});