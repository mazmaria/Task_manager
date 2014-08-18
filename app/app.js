(function() {
    
    var app = angular.module("AppModule", ["usersModule", "tasksModule", "ngRoute"]);
    
    app.config(function ($routeProvider) {
        $routeProvider
                .when("/", {
                    controller: "TasksController",
                    templateUrl: "app/tasks/views/tasksView.html"
                })
                .when("/users", {
                    controller: "UsersController",
                    templateUrl: "app/users/views/usersView.html"
                })
                .when("/tasks", {
                    controller: "TasksController",
                    templateUrl: "app/tasks/views/tasksView.html"
                })
//                .when("/newtask", {
//                    controller: "NewTaskController",
//                    templateUrl: "app/tasks/views/newTask.html"
//                })
                /*.otherwise({redirectTo: "/"})*/;
    });
    
}());