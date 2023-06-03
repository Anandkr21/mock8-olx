const express = require('express')
const cors = require('cors')
const { connection } = require('./config/db')
const { userRouter } = require('./routes/userRoute')
const { productRouter } = require('./routes/productRoute')


require('dotenv').config()
const PORT = process.env.port || 5000

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to OLX classifieds.')
})

app.use('/user', userRouter)
app.use('/post', productRouter)

app.listen(PORT, async() => {
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log("Unable to connect with DB");
    }
    console.log(`Server is running at port: ${PORT}`);
})