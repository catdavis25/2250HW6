import React from 'react';
import { Link } from "react-router-dom";
import "./general.css";

function Navbar(){
    return(
        <div>
            <ul className='Nav'>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/TicTacToe">TicTacToe</Link></li>
                <li><Link to = "/API">API</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;