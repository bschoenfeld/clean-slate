(function(){
    'use strict';

    angular
        .module('manager')
        .controller('HomeController', HomeController);

    function HomeController($rootScope, $firebaseAuth, userService, $state, $scope){
        var vm = this;
        var ref = new Firebase($rootScope.fbUrl);
        vm.authObj = $firebaseAuth(ref);
        
        
        $scope.currentUser = $rootScope.currentUser
        console.log(userService.getUser());

    }
})();