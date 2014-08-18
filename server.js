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




app.get("/customers/:id", function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get("/users", function (req, res) {
    Users.find({}, function (err, docs) {
        res.send(docs);
    });
    
});

//New

app.post("/user_new", function (req, res) {
    var b = req.body;
    new Users({
        name: b.name
    }).save(function(err, docs) {
        res.send("user created");
    });
});



// Getting all users
//app.get("/users", function (req, res) {
//    res.json(users);
//});

// Getting all tasks
app.get("/tasks", function (req, res) {
    res.json(tasks);
});

app.post("/create_new_task", function (req, res) {
    tasks.push(req.body);
    res.json(req.body);  
});

app.get("/hi/:userId", function (req, res) {   
    res.send("Hello " + req.params.userId);
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

app.post("/test", function (req, res) {
    res.send("Hello " + req.body.name);
});

app.listen(8080);

console.log("Express listening on port 8080");


// All users list
var users = [
    {
        name: "Nick",
        id: 1,
        created_at : "20/11/2011"
    },
    {
        name: "Den",
        id: 2,
        created_at : "22/11/2011"
    }
];

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