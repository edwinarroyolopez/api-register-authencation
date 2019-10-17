
const express = require('express');
const app = express();
var jwt = require('jsonwebtoken')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit:'10mb'}))

app.post('/login', (req, res) => {
  var username = req.body.user
  var password = req.body.password

  if( !(username === 'oscar' && password === '1234')){
    res.status(401).send({
      error: 'usuario o contraseña inválidos'
    })
    return
  }

  var tokenData = {
    username: username
    // ANY DATA
  }

  var token = jwt.sign(tokenData, 'Secret Password', {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  })

  res.send({
    token
  })
})



// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});