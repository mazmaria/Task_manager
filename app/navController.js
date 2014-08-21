(function() {
    
    function HeaderController($scope, $location) { 
        $scope.isActive = function (viewLocation) { 
            return $location.path().indexOf(viewLocation) !== -1;
        };
    }
    
    angular.module("usersModule").controller("HeaderController", HeaderController);
    
}());
    
    
    
