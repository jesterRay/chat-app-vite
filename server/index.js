
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port || 8000;
const OTP = require('./helpers/otp_helper');
require('./routers/web');
require('./helpers/db')


app.use(require('cors')());
app.use(express.json());


// routers
const AuthRouter = require('./routers/AuthRouter');
const ContactRouter = require('./routers/ContactRouter');


app.use('/api/auth',AuthRouter);
app.use('/api/contact',ContactRouter);


require('./helpers/socket_helper')

app.use((req,res,next)=>{
    console.log('404 Page not found');
    res.send('404 Page not found');
})



app.listen(port,()=>{
    console.log(`Server running at the http://127.0.0.1:${port}`);
})