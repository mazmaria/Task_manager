(function() {
    
    var EditUserController = function($scope, $routeParams, $http, $location) {
        
        $scope.updateUser = function(userName, userId, updatedUser) {
            
            $http.put("/users/" + userName + "/" + userId + "/edit", updatedUser)
                    .success(function() {
                        $location.path("/users");
                    });
           
        };
            
        $http.get("/users/" + $routeParams.userId)
                .success(function (user) {
                    $scope.user = user;

        });
    };  
    
    EditUserController.$inject = ["$scope", "$routeParams", "$http", "$location"];
    
    angular.module("usersModule").controller("EditUserController", EditUserController);
    
}());