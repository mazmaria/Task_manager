(function() {
    
    var TasksController = function($scope, tasksFactory, $http/*, newTaskFactory*/) {
        
        $scope.tasks = [];
        
        $scope.createNewTask = function(title) {
            
            // get only id param from tasks
            var onlyId = _.pluck($scope.tasks, "id"),
                    
            // defining new ID for task
                newId = _.max(onlyId),
                        
            // new task object        
                newTask = {
                    title: title,
                    created_at: new Date(),
                    id: newId + 1
                };
            // adding new task to the server
            $http.post("/create_new_task", newTask)
                    .success(function (data) {
                        // adding new task to our $scope
                        $scope.tasks.push(data);            
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
    
    TasksController.$inject = ["$scope", "tasksFactory"/*, "newTaskFactory"*/, "$http"];
    
    angular.module("tasksModule").controller("TasksController", TasksController);
    
}());