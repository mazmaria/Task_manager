var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    _und = require("underscore"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override");
    

app.use(express.static(__dirname, "/"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json()); // put the parsed body to req.body

//app.use(methodOverride());



mongoose.connect("mongodb://localhost/task_manager");

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age :Number
}),
    Users = mongoose.model("Users", UserSchema);


// Get users list
app.get("/users", function (req, res) {
    Users.find({}, function (err, docs) {
        res.json(docs);
    });  
});

// Get single user
app.get("/users/:userId", function (req, res) {
    Users.find({_id: req.params.userId}, function (err, docs) {
        res.json(docs[0]);
    });
});

// Create new user
app.post("/users/new", function (req, res) {
    
    var b = req.body;
    
    new Users({
        name: b.name,
        email: b.email,
        age: b.age
    }).save(function(err, docs) {
        res.json(docs);
    });
    
});

// Update user
app.put("/users/:userName/:userId/edit", function(req, res) {
    
    var b = req.body;
    
    Users.update({_id: req.params.userId}, {
        name: b.name,
        email: b.email,
        age: b.age
    }, function (err) {
        res.json(err);
    });
    
    
});


// Delete user
app.delete("/users/delete/:userId", function(req, res) {
    Users.remove({_id: req.params.userId}, function(err) {
       res.json(err);
    });
});

// Getting all tasks
app.get("/tasks", function (req, res) {
    res.json(tasks);
});

app.post("/create_new_task", function (req, res) {
    tasks.push(req.body);
    res.json(req.body);  
});

// Delete task from array of tasks
app.delete("/tasks/delete/:id", function (req, res) {
    var taskId = parseInt(req.params.id, 10);
    _und.find(tasks, function (task, index) {
        if (task.id === taskId) {
            tasks.splice(index, 1);
        }
    });
});

app.listen(8080);

console.log("Express listening on port 8080");


// All tasks list
var tasks = [
    {
        title: "Learn git",
        completed: false,
        created_at: "22/11/2012",
        user_id: null,
        id: 1,
        comments: [
            
        ]
    },
    {
        title: "Learn angularjs",
        completed: false,
        created_at: "24/11/2012",
        user_id: null,
        id: 2,
        comments: [
            {
                comment_text: "Need more info",
                user_id: null,
                created_at: null,
                id: null
            }
        ]
    }
];