(function(){
    'use strict';

    angular.module('manager', ['firebase', 'ui.router']);

    angular
        .module('manager')
        .run(function($rootScope) {
            //Base Firebase URL
            $rootScope.fbUrl = 'https://shippout-v0.firebaseio.com/';
   
        })
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
                /*resolve: {
                    user: function(userService) {
                        return userService.getUser();
                    }
                }*/
            });
            
            
            $stateProvider.state('organizations', {
                url: '/organizations',
                templateUrl: 'js/organizations/organizations.html',
                controller: 'OrgController',
                controllerAs: 'vm',
                resolve: {
                    user: function(userService) {
                        return userService.getUser();
                    }
                }
            });
            
            
            

            $urlRouterProvider.otherwise('/login');
        });


})();