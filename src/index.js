const express = require("express"); 
const bodyParser = require("body-parser");
const apicache = require("apicache");

const workoutRouter = require("./localdb/routes"); // localdb
const bootcampsRouter = require("./mysql2/routes"); // mysql

const app = express();
const cache = apicache.middleware;

const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(cache("2 minutes"));

app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
});

app.use("/api/workouts", workoutRouter);
app.use("/api/bootcamp", bootcampsRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
