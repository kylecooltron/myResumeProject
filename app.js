     
     
     
     var resumeApp = angular.module('resumeApp', ['ngRoute']);
      resumeApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            template: 'This is my default index html file',
            controller: 'LandingPageCtrl'
          }).
          when('/:CodePage', {
            templateUrl: 'http://kylecooltron.github.io/myResumeProject/hello.html',
            controller: 'CodePageCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
