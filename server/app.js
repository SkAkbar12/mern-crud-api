const express=require('express')

const cors=require('cors')
const bodyparser=require('body-parser')
const db=require('./dbconn')
const post=require('./route/post')
const get=require('./route/get')
const put=require('./route/update')
const delete_=require('./route/delete')
const patch=require('./route/patch')

const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use('/',post);
app.use('/',get);
app.use('/',put);
app.use('/',delete_);
app.use('/',patch);
//const port=process.env.PORT 3000

app.listen(3000,()=>{
    console.log('server is running')
});

