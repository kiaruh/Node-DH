const express = require('express');
const app = express();
const path = require('path');
const { send } = require('process');

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(3000,() => console.log('Server ON'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views','home.html'))

})

app.get('/register',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./views','register.html'))
})