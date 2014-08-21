(function() {
    
    var EditTaskController = function($scope, $http, $routeParams, $location) {
        
        $http.get("/tasks/" + $routeParams.taskId)
                .success(function (task) {
                    $scope.task = task;
                });
                
        $scope.updateTask = function (taskId, editedTask) {
            $http.put("/tasks/" + taskId + "/update", editedTask)
                    .success(function (task) {
                        $location.path("/tasks");
                    });
        };
        
    };
    
    EditTaskController.$inject = ["$scope", "$http", "$routeParams", "$location"];
    
    angular.module("usersModule").controller("EditTaskController", EditTaskController);
    
}());