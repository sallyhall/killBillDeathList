(function(){
  'use strict';

  angular
  .module('targets',[
    'ngRoute'
  ])
  .config(function($routeProvider){
    $routeProvider
        .when('/', {
          templateUrl: '/myViews/targets/list.html',
          controller: 'TargetsController'

        })
        .when('/addTarget', {
          templateUrl: '/myViews/targets/create.html',
          controller: 'TargetsController'
        })
        .when('/404', {
          templateUrl: '/myViews/404.html'
        })
        .otherwise({ redirectTo: '/404'})

  });

})();
