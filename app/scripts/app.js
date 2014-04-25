'use strict';

angular
  .module('tribecaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'nvd3ChartDirectives',
    'd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/d3', {
        templateUrl: 'views/d3.html',
        controller: 'D3Ctrl'
      })
      .when('/paper', {
        templateUrl: 'views/paper.html',
        controller: 'PaperCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });