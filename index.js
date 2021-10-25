const express = require('express');
const pptr = require('./src/app');
const pdf = require('./src/pdf');
const app = express();
const PORT = process.env.PORT || 3000;

// app.set('views',);

app.get('/',(req,res)=>{
    res.send('Hello')
});
app.get('/image', async (req,res)=>{

    const url = req.query.url
    const SS = await pptr(`http://${url.replace(/(^\w+:|^)\/\//, '')}`);
console.log(url)
    res.setHeader('content-type', 'image/jpg');
    res.send(SS)
});
app.get('/pdf', async (req,res)=>{

    const url = req.query.url
    const PDF = await pdf(url.replace(/(^\w+:|^)\/\//, ''));
    console.log(url);
    res.setHeader('content-type','application/pdf');
    res.end(PDF,'binary');


})


app.listen(PORT,()=>{
    console.log(`Listening to : ${PORT}`)
});
