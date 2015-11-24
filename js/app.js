(function(){
  'use strict';

  angular
  .module('targets',[
    'ngRoute'
  ])
  .config(function($routeProvider){
    $routeProvider
        .when('/', {
          templateUrl: '/views/targets/list.html',
          controller: 'TargetsController'

        })
        .when('/addTarget', {
          templateUrl: '/views/targets/create.html',
          controller: 'TargetsController'
        })
        .when('/404', {
          templateUrl: '/views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

  });

})();
