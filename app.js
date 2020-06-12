var express = require('express');
var app = express();
var path = require('path');
var cors=require('cors');
app.use(cors());
const port = 3000;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FeedKC')
    .then(() => console.log('connection successful@27017'))
    .catch((err) => console.error(err));
var loginRouter = require('./routes/login');
var donateRouter = require('./routes/donate');
var demogRouter = require('./routes/demog');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/login', loginRouter);
app.use('/donate', donateRouter );
app.use('/demog', demogRouter );

app.listen(port, () => console.log(`FeedKc app listening on port ${port}!`));
module.exports = app;


