(function() {
    
    var CreateTaskModalController = function($scope, $modal, $log, tasksFactory) {
        
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceController,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
              }
            }
          });

            modalInstance.result.then(function (selectedItem) {
//                    $scope.selected = selectedItem;
                    console.log(selectedItem);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
        };
        
        
    };
    
    var ModalInstanceController = function($scope, $modalInstance, $http, items, tasksFactory) {
        
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };
        
        $scope.createTask = function(taskTitle, taskContent) {
            var newTask = {
                title: taskTitle,
                content: taskContent
            };
            $http.post("/tasks/new", newTask).success(function (data) {
                console.log($scope.tasks);
            });
        };
        
        $scope.ok = function (taskTitle, taskContent) {
            //$scope.createTask(taskTitle, taskContent);
    
            tasksFactory.createTask(taskTitle, taskContent)
                    .success(function (data) {
                        
                         $modalInstance.close(data);
                    });
            
          
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
        
    };
    
    
//    ModalInstanceController.$inject = ["$scope", "$modalInstance"];
    CreateTaskModalController.$inject = ["$scope", "$modal", "$log", "tasksFactory"];
    
    angular.module("tasksModule").controller("CreateTaskModalController", CreateTaskModalController);
    
}());

