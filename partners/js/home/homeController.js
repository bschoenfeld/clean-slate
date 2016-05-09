(function(){
    'use strict';

    angular
        .module('partner')
        .controller('HomeController', HomeController);

    function HomeController($firebaseAuth, userService, $state){
        console.log("tes");
        var vm = this;
        var ref = new Firebase('blazing-torch-1225.firebaseIO.com/');
        vm.authObj = $firebaseAuth(ref);

        var currentUser = userService.getUser();

        vm.title = currentUser.title;
        
        //console.log(currentUser);
    }
    
})();