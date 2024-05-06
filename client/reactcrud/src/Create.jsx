import react, { useState } from 'react'
import axios from 'axios'

const Create=()=>{
    const [data,setdata]=useState({
        bookname:'',
        bookauthor:'',
        bookdate:'',
    });
     const handleadd=(e)=>{
        const {className,value}=e.target
        setdata({
            ...data,[className]:value
        })
     }

     const handlesubmit=async(e)=>{
        try{
            e.preventDefault()
            const res=await axios.post('http://localhost:3000/post',data)
            console.log(res)
            setdata({
        bookname:'',
        bookauthor:'',
        bookdate:'',
            })
        }
        catch(err){
            console.error(err)
        }
     }
    return(
        <div class="container">
       
        <fieldset >
          <legend> Add New Book </legend>
          <div class="form-group">
            <label for="book-name">Book Name:</label>
            <input type="text" id="book-name" className="bookname" value={data.bookname} onChange={handleadd} required />
          </div>
          <div class="form-group">
            <label for="book-author">Author:</label>
            <input type="text" id="book-author" className="bookauthor" value={data.bookauthor} onChange={handleadd} required />
          </div>
          <div class="form-group">
            <label for="book-date">Date:</label>
            <input type="date" id="book-date" className="bookdate" value={data.bookdate} onChange={handleadd} required />
          </div>
          <button type="submit" onClick={handlesubmit}>Add Book</button>
          <a href='/getbook'>View Books</a>
        </fieldset>
        </div>
    )
};

export default Create