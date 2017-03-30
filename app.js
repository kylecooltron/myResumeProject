     
     
     
     var resumeApp = angular.module('resumeApp', ['ngRoute']);
      resumeApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'HomePage.html',
            controller: 'LandingPageCtrl'
          }).
          when('/:CodePage', {
            templateUrl: 'hello.html',
            controller: 'CodePageCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });





