import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Photo from "../../assets/Photo.jpg";
import { IoIosCall } from "react-icons/io";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {

  const [isMenu, setIsMenu] = useState(false);


  const toggleMenu = () => {
    setIsMenu(!isMenu);
  }

  return (
    <div>
      <nav className="nav_Wrapper">
        <div className='nav_container'>
          <div className='logo'>
            <img src={Photo} alt='Alam' />
          </div>



          <div>
            <ul className={`nav_item ${isMenu ? 'open' : ''}`}>

              <NavLink to="/skill" className={({ isActive }) => (isActive ? 'item active' : 'item')}>
                <li>Skill</li>
              </NavLink>


              <NavLink to="/project" className={({ isActive }) => (isActive ? 'item active' : 'item')}>
                <li>Project</li>
              </NavLink>

              <div className='call'>
                
                <a href="tel:+919507283573">
                  <IoIosCall className='icon' /> <p>+91-9507283573</p>
                </a>
              </div>
            </ul>

          </div>

          <div className='hamBar' onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavBar
