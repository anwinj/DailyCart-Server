require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Connection/db')
const router = require('./Routes/router')

const dailyCartServer = express()
dailyCartServer.use(cors())
dailyCartServer.use(express.json())

dailyCartServer.use(router)

const PORT = 3000 || process.env.PORT

dailyCartServer.listen(PORT,()=>{
    console.log(`Daily cart server started at port ${PORT}`);
})

dailyCartServer.get('/',(req,res)=>{
    res.send(`<h1>Daily Cart Server Started...Waiting for Client requests</h1>`)
})