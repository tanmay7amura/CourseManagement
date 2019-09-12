import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <>
    <NavLink to="/" exact activeStyle={{color: "orange"}} > Home </NavLink> {"|"}
    <NavLink to="/about" activeStyle={{color: "orange"}} > About</NavLink> {"|"}
    <NavLink to="/courses" activeStyle={{color: "orange"}} > Course</NavLink> {"|"}
    </>
);

export default Header;