(function() {
    
    var newTaskFactory = function($http) {
        
        var newTask = {};
        
        newTask.createNewTask = function (title) {
            $http.post("/create_new_task", {title: title})
                    .success(function(data) {
                        console.log(data);
                    });
            
        };
        
        return newTask;
        
    };
    
    newTaskFactory.$inject = ["$http"]
    
    angular.module("tasksModule").factory("newTaskFactory", newTaskFactory);
    
}());