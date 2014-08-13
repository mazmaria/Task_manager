(function() {
    
    var users = angular.module("usersModule", ["ngRoute"]);
    
    users.config(function ($routeProvider) {
        $routeProvider
                .when("/users", {
                    controller: "UsersController",
                    templateUrl: "app/users/views/usersView.html"
                })
                .when("/tasks", {
                    controller: "TasksController",
                    templateUrl: "app/users/views/tasksView.html"
                })
                .otherwise({redirectTo: "/"});
    });
    
}());