const express = require('express');
const { dbConnection } = require('./config/dbConnection');
const app = express()
const port = 3000

app.use(express.json());
app.use('/users',require('./api/user.routes'))

dbConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))