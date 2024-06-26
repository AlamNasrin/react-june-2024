import React, { Suspense, useContext } from 'react';

import Message from './components/message';
import Counter from './components/Counter';
import Login3 from './components/Login3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route, BrowserRouter } from 'react-router-dom';
// import ListProducts from './components/ListProducts'; replaced with React.lazy() import function
import EditProduct from './components/EditProduct';
import GadgetStore from './components/GadgetStore';
import { AppThemeContext } from './components/context/AppThemeContext';

const ListProducts = React.lazy(() => import('./components/ListProducts'));

function App() {

  const theme = useContext(AppThemeContext);  

  function switchTheme() {
    theme.setMode && theme.setMode(theme.mode == 'dark' ? 'light' : 'dark')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
        <div className='container-fluid'>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <div className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
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
                    <li className="nav-item">
                        <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
                    </li>
                </ul>
                </div>
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
    </Suspense>
  );
}

export default App;
