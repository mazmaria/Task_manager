(function() {
    
    var tasksFactory = function ($http) {
        
        var tasks = {};
        
        tasks.getTasks = function() {
            return $http.get("/tasks");
        };
        
        return tasks;
        
    };
    
    tasksFactory.$inject = ["$http"];
    
    angular.module("usersModule").factory("tasksFactory", tasksFactory);
    
}());