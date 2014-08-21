(function() {
    
    var TasksController = function($scope, tasksFactory, $http, $location) {
        
        $scope.editTask = function(taskId) {
            $location.path("/tasks/" + taskId + "/edit");
        };
        
        $scope.createNewTask = function(title, taskContent) {
            
            var newTask = {
                title: title,
                content: taskContent
            };
            
            $http.post("tasks/new", newTask)
                    .success(function (data) {
                       $scope.tasks.push(data);
                    });
                
        };

        // Delete task
        $scope.deleteTask = function (taskId) {
            
            $http.delete("/tasks/delete/" + taskId)
                    .success(function() {
                       init();
                });
            
        };
        
        
        function init() {
            tasksFactory.getTasks()
                    .success(function(tasks) { 
                        $scope.tasks = tasks; 
                    });
        }
        
        init();
        
    };
    
    TasksController.$inject = ["$scope", "tasksFactory", "$http", "$location"];
    
    angular.module("tasksModule").controller("TasksController", TasksController);
    
}());