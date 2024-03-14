const mongoose = require('mongoose')

const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("Daily cart server successfully connected with mongoDB atlas");
    }
).catch((err)=>{
    console.log(err);
})