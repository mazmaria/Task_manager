(function() {
    
    var tasksFactory = function ($http) {
        
        var tasks = {};
        
        tasks.getTasks = function() {
            return $http.get("/tasks");
        };
        
        tasks.createTask = function(taskTitle, taskContent) {
            console.log("create task from factory task is activated");
            var newTask = {
                title: taskTitle,
                content: taskContent
            };
            return $http.post("/tasks/new", newTask);
        };
        
        return tasks;
        
    };
    
    tasksFactory.$inject = ["$http"];
    
    angular.module("tasksModule").factory("tasksFactory", tasksFactory);
    
}());