require('./config/config')
const express = require('express')
port = 9900
const allRoutes = require('./route/route')
const app = express()

app.use(express.json())
app.use('/api', allRoutes)

// This is the endpoint for the API
app.get('/', (req, res)=>{
    res.status(200).json({
        message: "This is the endpoint for fruits people API"
    })
})

app.listen(port, (req, res)=>{
    console.log(`Server is running on port: ${port}`)
})