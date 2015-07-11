define([
  'angular',
  'uiRouter',
  './modules/home/index'
], function (angular) {
  'use strict';

  return angular.module('app', ['ui.router', 'home']);
});