/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using angular.bootstrap
 */
define([
  'require',
  'angular',
  'fastclick',
  'app',
  'foundation',
  'app'
], function (require, angular, fastclick, App) {
  'use strict';

  /*
   * RequrieJS loader plugins - http://requirejs.org/docs/plugins.html
   */
  require(['domReady!'], function (document) {
    // Bootstrap angular
    angular.bootstrap(document, ['app']);

    // Initialize fastclick
    fastclick.attach(document.body);

    // Initialize foundation
    $(document).foundation();
  });
});