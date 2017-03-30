var uvaApp = angular.module('uvaApp', ['ngRoute','ngCookies']);

uvaApp.config(function($routeProvider, $cookiesProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/users/login.html',
    controller: 'usersController',
    controllerAs: 'UC'
  })
  .when('/', {
    templateUrl: 'partials/users/login.html',
    controller: 'usersController',
    controllerAs: 'UC'
  })

  .when('/dashboard', {
    templateUrl: 'partials/dashboard/dashboard.html',
    controller: 'dashboardController',
    controllerAs: 'DC'
  })
  .when('/dashboard/post/:id', {
    templateUrl: 'partials/dashboard/postShow.html',
    controller: 'showController',
    controllerAs: 'SC'
  })
  .when('/rosters', {
    templateUrl: 'partials/roster/rosterhome.html',
    controller: 'showController',
    controllerAs: 'SC'
  })



});
