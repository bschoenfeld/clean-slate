(function(){
    'use strict';

    angular
        .module('partner')
        .service('userService', UserServiceImpl)
        .factory("Auth", ["$firebaseAuth", "$rootScope",
            function($firebaseAuth, $rootScope) {
                var ref = new Firebase($rootScope.fbUrl);
                return $firebaseAuth(ref);
            }
        ]);
 
    function UserServiceImpl() {
        var user = {};

        return {
            getUser: getUser,
            setUser: setUser
        };

        function getUser() {
            return user;
        }

        function setUser(nUser) {
            user = nUser;
        }
    }
    
    
    
})();