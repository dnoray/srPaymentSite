'use strict';

/**
 * @ngdoc overview
 * @name srbcApp
 * @description
 * # srbcApp
 *
 * Main module of the application.
 */
angular
  .module('srbcApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });