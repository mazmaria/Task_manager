(function() {
    
    var TasksController = function($scope, tasksFactory, $http, $location) {
        console.log(tasksFactory.createdTask);
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
        
        // Update task
        $scope.updateTask = function (editedTask) {
            $http.put("/tasks/" + editedTask._id + "/update", editedTask)
                    .success(function (task) {
                        init();
                    });
        };
        
        function init() {
            tasksFactory.getTasks()
                    .success(function(tasks) { 
                        $scope.tasks = tasks;
                    });
                    
            $http.get("/users")
                    .success(function (users) {
                        users = _.pluck(users, "name");
                        $scope.users = users;
                
                    });
            
        }
        
        init();
        
    };
    
    TasksController.$inject = ["$scope", "tasksFactory", "$http", "$location"];
    
    angular.module("tasksModule").controller("TasksController", TasksController);
    
}());