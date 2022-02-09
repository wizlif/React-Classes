import React from 'react';
import './style.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Lecture10(props) {
    let tabs = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact-us'
        }];

    return (
        <div style={{margin: '50px'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {tabs.map(({title, path}, index) =>
                    <NavLink key={index}
                             to={path}
                             className={({isActive}) => `btn btn-indigo ${isActive ? 'active' : ''}`}>
                        {title}
                    </NavLink>)}
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default Lecture10;