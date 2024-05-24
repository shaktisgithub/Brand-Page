import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Location from './components/location/location';
import About from './components/about/about';
import Contact from "./components/contact/contact";
import Login from "./components/login/login";
import SignUp from './components/signup/signup';
import Category from './components/category/category';
const CustomRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Menu />} />
                <Route path='/location' element={<Location/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/category' element={<Category/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default CustomRouter;
