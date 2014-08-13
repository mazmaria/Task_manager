(function() {
    
    var usersFactory = function($http) {
        
        var factory = {};
        
        factory.getUsers = function() {
            return $http.get("/users");
        };
        
        return factory;
        
    };
    
    usersFactory.$inject = ["$http"];
    
    angular.module("usersModule").factory("usersFactory", usersFactory);
    
}());