var wittyApp = angular.module("wittyApp",['ngRoute']);

wittyApp.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: 'index/home.html'
  })
  .when('/page', {
    templateUrl: 'index/page.html',
    controller: 'gameController'
  })
  .otherwise({
    redirectTo: '/home'
  });
});
