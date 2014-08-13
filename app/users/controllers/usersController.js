(function() {
    
    var UsersController = function ($scope, usersFactory) {
        $scope.users = [];
        
        function init() {
            usersFactory.getUsers()
                    .success(function(users) {
                        $scope.users = users;
                    })
                    .error(function() {
                        //error
                    });
        }
        
        init();
        
    };
    
    UsersController.$inject = ["$scope", "usersFactory"];
    
    angular.module("usersModule").controller("UsersController", UsersController);
    
}());