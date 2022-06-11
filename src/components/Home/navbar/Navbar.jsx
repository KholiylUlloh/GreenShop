import React from 'react';
import './navbar.css'
import logo from '../../../assets/icons/Logo.svg';
import search from '../../../assets/icons/search.svg';
import kart from '../../../assets/icons/kart.svg';
import logout from '../../../assets/icons/Logout.svg';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navbar } from '../../../utils/navbar';

const Navbar = () => {
  const location = useLocation()
  return (
    <>
    <div className='wrapper'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className="linkWrap">
          {
            navbar.map((val, id) => 
              <Link className={location.pathname.includes(val.path) ? 'active scale' : 'link'} to={val.path} key={id}>{val.title}</Link>
            )
          }
        </div>
        <div className="itemWrap">
            <img src={search} alt="" />
            <img src={kart} alt="" />
            <button className='login-out_bttn'>
              <img src={logout} alt="" />
              Login
            </button>
        </div>
    </div>
      <Outlet />
    </>
  )
}

export default Navbar;