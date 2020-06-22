const app = require('./app').app

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...')
})
