require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require("./db/connect");
const express = require('express');
const logger = require('morgan');

const authRouter = require('./routes/auth.router');
const {PORT} = process.env || 3001;
const app = express();
dbConnect();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT)
})

