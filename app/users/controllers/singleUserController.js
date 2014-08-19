(function() {
    
    var SingleUserController = function($scope, $http, $routeParams, $location) {
        
        $scope.deleteUser = function(userId) {
            $http.delete("/users/delete/" + userId)
                    .success(function () {
                        $location.path("/users");
                    });
        };
        
        $scope.editUser = function(userName, userId) {
            $location.path("/users/" + userName + "/" + userId + "/edit");
        };
        
        $http.get("/users/" + $routeParams.userId)
                .success(function (user) {
                    $scope.user = user;
                });
        
    };
    
    SingleUserController.$inject = ["$scope", "$http", "$routeParams", "$location"];
    
    angular.module("usersModule").controller("SingleUserController", SingleUserController);
    
}());