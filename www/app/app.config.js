define(['./app.module'], function (app) {
  'use strict';

  app.config(config);

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  };
});