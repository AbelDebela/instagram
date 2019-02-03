const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const user      = require('./routes/api/user')
const photo     = require('./routes/api/photo')
const comment   = require('./routes/api/comment')
const follower  = require('./routes/api/follower')
const location  = require('./routes/api/location')
const tag       = require('./routes/api/tag')
const like      = require('./routes/api/like')
const app       = express();

app.get('/', (req,res)=> res.send('Hellow world.'));
const port = 6008;

app.use('/api/user', user);
app.use('/api/photo', photo);
app.use('/api/comment', comment);
app.use('/api/follower', follower);
app.use('/api/location', location);
app.use('/api/tag', tag);
app.use('/api/like', like);

app.listen(port, () => console.log(`Server is running in port ${port}`)


)