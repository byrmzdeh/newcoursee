import React, { useState } from 'react'
import './style.scss'
import { NavLink } from "react-router-dom";



const Navbar = () => {
    const [sticky, setSticky] = useState(false)


    function stickyNavbar() {
        if (window.scrollY >= 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    window.addEventListener("scroll", stickyNavbar);
    return (
        <div className={`navbar ${sticky === true ? 'sticky' : ''}`}>
           
            <div className="nav">
                <img width={150} src="https://shtheme.com/demosd/thecappawp/wp-content/uploads/2022/05/logo.png" alt="err" />
                <ul>
                    <li><NavLink to='/'>Haqqımızda </NavLink></li>
                    <li><NavLink to='/sahələr'>Tədris sahələr <i class="fa-solid fa-chevron-down"></i></NavLink></li>
                    <li><NavLink to={'/korporativ'}>Korporativ </NavLink></li>
                    <li><NavLink to={'/əlaqə'}>Əlaqə</NavLink></li>
                    
                </ul>
                <div className="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-basket-shopping"></i>
                </div>

                <div className="head">
                <button>login </button>
                <button>register </button>
            </div>
            </div>
        </div>
    )
}

export default Navbar
