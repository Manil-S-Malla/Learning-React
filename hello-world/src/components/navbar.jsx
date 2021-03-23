import React, { Component } from 'react'

const NavBar = ({total}) => {
    console.log('Mount > NavBar - Render.');
    
    return ( 
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">
                Total Count{' '}
                <span className="badge badge-pill badge-secondary">
                    {total}
                </span>
            </span>
        </nav>
    );
}
 
export default NavBar;