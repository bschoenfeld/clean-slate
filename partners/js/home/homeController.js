(function(){
    'use strict';

    angular
        .module('partner')
        .controller('HomeController', HomeController);

    function HomeController($rootScope, $firebaseAuth, userService, $state){
        console.log("tes");
        var vm = this;
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);

        var currentUser = userService.getUser();

        vm.title = currentUser.title;
        
        //console.log(currentUser);
    }
    
})();