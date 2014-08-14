(function() {
    
    var NewTaskController = function($scope, newTaskFactory) {
        
        $scope.createNewTask;
        
        function init() {
            
            $scope.createNewTask = newTaskFactory.createNewTask;
            
        }
        
        init();
        
    };
    
    NewTaskController.$inject = ["$scope", "newTaskFactory"];
    
    angular.module("tasksModule").controller("NewTaskController", NewTaskController);
    
}());