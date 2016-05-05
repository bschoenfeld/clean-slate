(function(){
    'use strict';

    angular
        .module('manager')
        .controller('OrgController', OrgController);

    function OrgController($scope, $firebaseAuth, userService, $state, $firebaseArray){
        var vm = this;
        var ref = new Firebase('blazing-torch-1225.firebaseIO.com');
        var orgRef = ref.child('organizations');
        vm.authObj = $firebaseAuth(ref);


        console.log($firebaseArray(orgRef));
        
        $scope.organizations = $firebaseArray(orgRef);

        vm.addOrganization = addOrganization;

        function addOrganization(){
            if(vm.title && vm.email && vm.password) {
                vm.authObj.$createUser({
                    email: vm.email,
                    password: vm.password
                })
                .then(function(userData){
                    return vm.authObj.$authWithPassword({
                        email: vm.email,
                        password: vm.password
                    });
                })
                .then(function(authData){
                    orgRef.push().set({
                        email: vm.email,
                        password: vm.password,
                        title: vm.title
                    })
                    
                })
            }
        }

       
    }
})();