
require('dotenv').config() /* create my environments vars */

const express = require('express')
const app = express()
const port = process.env.port || 8000



app.listen(port, () => {
    console.log(`Server is listening  at http://localhost:${port}`)
})