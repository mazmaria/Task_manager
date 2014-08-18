(function() {
    
    var newTaskFactory = function($http) {
        
        var newTask = {};
        
        newTask.createNewTask = function (title) {
            var task = {title: title, created_at: new Date()};
            return $http.post("/create_new_task", task);   
        };
        
        return newTask;
        
    };
    
    newTaskFactory.$inject = ["$http"];
    
    angular.module("tasksModule").factory("newTaskFactory", newTaskFactory);
    
}());