(function(){
    'use strict';

    angular
        .module('manager')
        .service('userService', UserServiceImpl);

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