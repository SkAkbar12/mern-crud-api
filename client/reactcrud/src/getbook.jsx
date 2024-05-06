import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Getbook = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/get');
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    
    const deletedata = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/delete/${id}`);
            console.log(res);
            location.reload()
            // If you want to update the UI after deletion, you can fetch the data again.
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book) => (
                        <tr key={book._id}>
                            <td>{book.bookname}</td>
                            <td>{book.bookauthor}</td>
                            <td>{book.bookdate}</td>
                            <td>
                                <a href={`/editbook/${book._id}`}>Edit</a>
                                <br />
                                <a href="#" onClick={() => deletedata(book._id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Getbook;
