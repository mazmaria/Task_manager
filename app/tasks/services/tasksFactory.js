(function() {
    
    var tasksFactory = function ($http) {
        
        var tasks = {};
        
        tasks.getTasks = function() {
            return $http.get("/tasks");
        };
        
        return tasks;
        
    };
    
    tasksFactory.$inject = ["$http"];
    
    angular.module("tasksModule").factory("tasksFactory", tasksFactory);
    
}());