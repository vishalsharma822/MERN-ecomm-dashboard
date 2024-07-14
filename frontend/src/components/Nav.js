import React from "react";

import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    // to logoout
    function logout() {
        localStorage.removeItem('user');
        navigate("/signup");
    }
    return (
        <div>
            <img
                alt="logo"
                className="ecomm-logo"
                src="file:///C:/Users/CODECLOUDS-VISHAL/OneDrive/Desktop/Vishal--Sharma.png" />
            {auth ?
                <>
                    <ul className='nav-ul'>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/update-product">Update Product</Link></li>
                        <li><Link to="/delete-product">delete Product</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/signup" onClick={logout}>Logout</Link></li>
                    </ul>
                </>
                :
                <>
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/login">Login</Link></li>
                        <li> <Link to="/signup">Signup</Link></li>
                    </ul>
                </>

            }


        </div>
    );
}

export default Nav;
