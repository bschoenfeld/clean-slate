(function(){
    'use strict';

    angular
        .module('manager')
        .controller('HomeController', HomeController);

    function HomeController($rootScope, $firebaseAuth, userService, $state){
        var vm = this;
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);

        console.log(userService.getUser());

    }
})();