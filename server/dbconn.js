
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://akbarskmd80:pkrDNMN5g2pvC16k@backenddb.8zgmqdv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')

mongoose.connection.on('connected',()=>{
    console.log('connected');
})

mongoose.connection.on('error',(err)=>{
    console.error('error',err);
})

module.exports=mongoose