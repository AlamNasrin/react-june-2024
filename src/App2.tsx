import React from 'react';

import Message from './components/message';
import Counter from './components/Counter';
import Login3 from './components/Login3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import GadgetStore from './components/GadgetStore';

function App() {
  return (
    <BrowserRouter>
        <div className='container-fluid'>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gadgets">Gadget Store</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <main style={{border: "2px solid blue", height: "800px", margin: "10px"}}>
            <Routes>
                <Route path = '/' element={<Message text = "helloReact"/>}></Route>
                <Route path = '/counter' element={<Counter initialValue = {10}/>}></Route>
                <Route path = '/login' element={<Login3/>}></Route>
                <Route path = '/products' element={<ListProducts/>}></Route>
                <Route path = '/products/:id' element={<EditProduct/>}></Route>
                <Route path = 'gadgets' element={<GadgetStore/>}></Route>
            </Routes>

        </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
