(function(){
    'use strict';

    angular
        .module('partner')
        .service('userService', UserServiceImpl)
        .factory("Auth", ["$firebaseAuth",
            function($firebaseAuth) {
                var ref = new Firebase("https://docs-sandbox.firebaseio.com", "example3");
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