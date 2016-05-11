(function(){
    'use strict';

    angular
        .module('partner')
        .controller('LoginController', LoginController);

    function LoginController($firebaseAuth, userService, $state){
        var vm = this;
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);
        ref.unauth();

        vm.login = login;
        vm.logOut = logOut;
        
        function login() {
            if(vm.email && vm.password) {
                vm.authObj.$authWithPassword({
                    email: vm.email,
                    password: vm.password
                })
                
                .then(function(authData){
                    
           //         console.log("User " + authData.uid + " is logged in with " + authData.provider);

                    ref.child("organizations").orderByChild("userID").equalTo(authData.uid).on("child_added", function(snapshot) {
                
                        if(snapshot) {
                            var profile = snapshot.val();
                            console.log(profile);
                            userService.setUser(profile);
                            $state.go('home');
                        }   
                    });
                })
                
                .catch(function(err){
                    console.log(err);
                });
            }
        };
        
        function logOut(){
           ref.unauth();
        };
    }
})();