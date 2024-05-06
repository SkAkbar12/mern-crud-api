import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Getbook from './getbook';
import Update from './update';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create/>} />
          <Route exact path="/getbook" element={<Getbook/>} />
          <Route exact path="/editbook/:id" element={<Update/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
