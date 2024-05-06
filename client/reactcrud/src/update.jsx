import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [data, setData] = useState({ bookname: "", bookauthor: "", bookdate: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/get/${id}`);
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [id]);

    const handleAdd = (e) => {
        const { className, value } = e.target;
        setData({
            ...data,
            [className]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/put/${id}`, data);
            console.log(res);
            setData({ bookname: "", bookauthor: "", bookdate: "" });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container">
            <fieldset>
                <legend>Update Book</legend>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="book-name">Book Name:</label>
                        <input type="text" id="book-name" className="bookname" value={data.bookname} onChange={handleAdd} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="book-author">Author:</label>
                        <input type="text" id="book-author" className="bookauthor" value={data.bookauthor} onChange={handleAdd} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="book-date">Date:</label>
                        <input type="date" id="book-date" className="bookdate" value={data.bookdate} onChange={handleAdd} required />
                    </div>
                    <button type="submit">Update Book</button>
                </form>
                <a href='/getbook'>View Books</a>
            </fieldset>
        </div>
    );
}

export default Update;
