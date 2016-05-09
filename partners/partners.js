(function(){
    'use strict';

    angular.module('partner', ['firebase', 'ui.router']);

    angular
        .module('partner')
        .run(["$rootScope", "$state", function($rootScope, $state) {
            $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
                // We can catch the error thrown when the $requireAuth promise is rejected
                // and redirect the user back to the home page
                if (error === "AUTH_REQUIRED") {
                    $state.go("login");
                }
            });
        }])
        .config(function($stateProvider, $urlRouterProvider){

            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'js/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
                /*,
                resolve: {
                    // controller will not be loaded until $requireAuth resolves
                    // Auth refers to our $firebaseAuth wrapper in the example above
                    "currentAuth": ["Auth", function(Auth) {
                        // $requireAuth returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireAuth();
                    }]
                }*/
               
            });
            
            
            $stateProvider.state('clients', {
                url: '/clients',
                templateUrl: 'js/client/clients.html',
                controller: 'ClientController',
                controllerAs: 'vm'
               
            });
            
                  
            $stateProvider.state('newClient', {
                url: '/clients/new',
                templateUrl: 'js/client/client.html',
                controller: 'ClientController',
                controllerAs: 'vm'
               
            });
            
                  
            $stateProvider.state('client', {
                url: '/clients',
                templateUrl: 'js/client/client.html',
                controller: 'ClientController',
                controllerAs: 'vm'
            });
            
            

            $urlRouterProvider.otherwise('/login');
        });


})();