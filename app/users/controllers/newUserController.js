(function() {
    
    var NewUserController = function($scope, $http,  $location) {
        
        $scope.createNewUser = function(name, email, age) {
            
            var newUser = {
                name: name,
                email: email,
                age: age
            };
            
            $http.post("/users/new", newUser)
                    .success(function (data) {
                        $location.path("/users");  
                    });
            
        };
    };
    
    NewUserController.$inject = ["$scope", "$http", "$location"];
    
    angular.module("usersModule").controller("NewUserController", NewUserController);
    
}());