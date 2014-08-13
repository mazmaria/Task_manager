(function() {
    
    var TasksController = function($scope, tasksFactory) {
        
        $scope.tasks = [];
        
        function init() {
            tasksFactory.getTasks()
                    .success(function(tasks) {
                       $scope.tasks = tasks; 
                    });
        }
        
        init();
    };
    
    TasksController.$inject = ["$scope", "tasksFactory"];
    
    angular.module("usersModule").controller("TasksController", TasksController);
    
}());