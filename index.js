const express = require("express")
const mongoose = require("mongoose")
const routes = require('./routes/routes')

// Express Setup
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
});

//MongoDB Setup
mongoose.connect("mongodb://localhost:27017/UserAuthDB");
