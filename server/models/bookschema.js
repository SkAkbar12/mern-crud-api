const mongoose=require('mongoose')

const { format }=require('date-fns');
const curd=new Date()
const today=format(curd,'yyyy-MM-dd')

const bookschema=new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    bookauthor:{
        type:String,
        required:true
    },
    bookdate:{
        type:String,
        required:true,
        default:today
    },
    status:{
        type:String,
        enum:['yes','no'],
        default:'yes'
    }
},
{
    timestamps: true
}
);

module.exports=mongoose.model('books_data',bookschema)