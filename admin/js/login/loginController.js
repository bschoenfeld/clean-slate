(function(){
    'use strict';

    angular
        .module('manager')
        .controller('LoginController', LoginController);

    function LoginController($rootScope, $firebaseAuth, userService, $state){
        var vm = this;
        console.log($rootScope.fbUrl);
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);


        vm.login = login;
        /*
                vm.signup = signup;

                function signup(){
                    if(vm.signupEmail && vm.signupPassword) {
                        vm.authObj.$createUser({
                            email: vm.signupEmail,
                            password: vm.signupPassword
                        })
                        .then(function(userData){
                            return vm.authObj.$authWithPassword({
                                email: vm.signupEmail,
                                password: vm.signupPassword
                            });
                        })
                        .then(function(authData){
                            userService.setUser(authData);
                            $state.go('home');
                        })
                    }
                }
        */
    function login() {
            if(vm.email && vm.password) {
                vm.authObj.$authWithPassword({
                    email: vm.email,
                    password: vm.password
                })
                .then(function(authData){
                    $rootScope.currentUser = authData;
                    userService.setUser(authData);
                    $state.go('home');
                })
                .catch(function(err){
                    console.log(err);
                });
            }
        }
    }
})();