const express = require('express')
const app = express()
const path = require('path')
const homeRoutes = require('./routes/home')
const PORT = 2121

require('dotenv').config({path: './config/.env'})


if (app.get("env") === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server now running on ${PORT}`);
})
