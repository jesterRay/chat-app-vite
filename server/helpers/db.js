const mongoose = require('mongoose')
require('dotenv').config();

let url = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.lfej5yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(url)
.then( () => console.log("Connected to database"))
.catch( err => console.log(`Error: ${err}`) );

