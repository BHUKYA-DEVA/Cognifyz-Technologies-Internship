const express= require('express');
const port=process.env.port || 5000;


const app=express();
exports.app = app;
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));



app.get('/Form',(req,res)=>
{
    res.sendFile(__dirname + '/public/index.html')

})





app.post('/formPost',(req,res)=>{
    console.log(req.body);

    res.sendStatus(__dirname+'/public/thanks.html');

})


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)

});
