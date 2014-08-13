(function() {
    
    var users = angular.module("usersModule", ["ngRoute"]);
    
    users.config(function ($routeProvider) {
        $routeProvider
                .when("/", {
                    controller: "UsersController",
                    templateUrl: "app/users/views/usersView.html"
                })
                .when("/users", {
                    controller: "UsersController",
                    templateUrl: "app/users/views/usersView.html"
                })
                .otherwise({redirectTo: "/"});
    });
    
}());