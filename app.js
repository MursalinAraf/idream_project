const express = require('express')
const {sequelize} = require('./models/index')
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

const app = express()
app.use(express.json())

app.use('/users', userRoute)
app.use('/posts', postRoute)


app.listen(8080, async () => {
    console.log('Server On')
    await sequelize.authenticate().then(() => {
        console.log('Database connected')
    }).catch((err) => console.log(err))

})
    