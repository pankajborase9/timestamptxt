const express=require('express');
const fs=require('fs')
const app=express()
 
const port=3001;


app.use(express.json())

const file=new Date().getTime()
console.log(file)


//fs.writeFileSync(`./${file}.txt`,'11')

app.get('/file',(req,res)=>{fs.appendFile(`./${file}.txt`, 'file is created using node JS', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
res.send(`./${file}.txt`)} );


app.listen(port,()=>console.log(`server runnning at port ${port}`) )