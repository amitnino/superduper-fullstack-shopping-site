const express = require('express');
const cors = require('cors');
const { validateToken } = require('./middleware');

require('dotenv').config();
require('./database');

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/statistics', require('./routes/statistics'));
app.get('/verify', validateToken, (req, res) => res.json({err:false}))
app.use('/store', validateToken, require('./routes/store'));
app.use('/carts', validateToken, require('./routes/carts'));
app.use('/orders', validateToken, require('./routes/orders'));

app.listen(PORT, ()=>console.log( '[SERVER] running on port '+PORT ) );
