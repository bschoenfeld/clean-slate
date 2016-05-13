(function(){
    'use strict';

    angular.module('manager', ['firebase', 'ui.router']);

    angular
        .module('manager')
        .run(['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth, $scope, userService, $state, $stateProvider) {
            //Base Firebase URL
            $rootScope.fbUrl = 'https://clean-slate.firebaseio.com/';
            var ref = new Firebase($rootScope.fbUrl);
            var authObj = $firebaseAuth(ref);
   
           console.log("started running");
        
            $rootScope.logIn = function(form) {
                
                if(form.username && form.password) {
                        authObj.$authWithPassword({
                        email: form.username,
                        password: form.password
                    })
                    .then(function(authData){
                        $rootScope.currentUser = authData;
                        console.log(authData);
                        $state.go('home');
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                }
                else
                {
                    alert(" whats going on Invalid login credentials");   
                }
            };
            
            
            $rootScope.logOut = function() {
                ref.unauth();
                $rootScope.currentUser = null;
                //$state.go('login');
            };
   
        }])
        /*
        .run(['$rootScope', function($scope) {
            $scope.currentUser = Parse.User.current();
            
            $scope.signUp = function(form) {
                var user = new Parse.User();
                user.set("email", form.email);
                user.set("username", form.username);
                user.set("password", form.password);
            
                user.signUp(null, {
                success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply(); // Notify AngularJS to sync currentUser
                },
                error: function(user, error) {
                    alert("Unable to sign up:  " + error.code + " " + error.message);
                }
                });    
            };
            
            $scope.logIn = function(form) {
                
                Parse.User.logIn(  form.username, form.password, {
                    success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply(); // Notify AngularJS to sync currentUser
                    },
                    error: function(user, error) {
                    alert("Unable to sign up:  " + error.code + " " + error.message);
                    }
                });
            
            };
            
            $scope.logOut = function(form) {
                Parse.User.logOut();
                $scope.currentUser = null;
            };
            
        }])
        */
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
            
            
            

            $urlRouterProvider.otherwise('/home');
        });


})();