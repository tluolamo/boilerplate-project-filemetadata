'use strict'

const express = require('express')
const cors = require('cors')
const asyncHandler = require('express-async-handler')

// require and use "multer"...
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', asyncHandler(async (req, res, next) => {
  res.sendFile(process.cwd() + '/views/index.html')
}))

app.post('/api/fileanalyse', upload.single('upfile'), asyncHandler(async (req, res, next) => {
  // console.log(req.file)
  const { originalname: filename, size: bytes } = req.file
  // console.log({ filename, bytes })
  res.json({ filename, bytes })
}))

// error handling
app.use(async (err, req, res, next) => {
  console.log('This is the invalid field ->', err.field)
  next(err)
})

module.exports = { app }
