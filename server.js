var express = require("express"),
    app = express();
    
    app.use(express.static(__dirname, "/"));


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

// Getting all users
app.get("/users", function (req, res) {
    res.json(users);
});

// Getting all tasks
app.get("/tasks", function (req, res) {
    res.json(tasks);
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