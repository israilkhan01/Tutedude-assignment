import React from 'react'
import headerCss from './Header.module.css'
import logo from '../../assets/logo.svg'
import {NavLink,Link} from 'react-router-dom' 
export default function Header() {
  return (
    <header className={headerCss.head}>
     <div className={headerCss.logo}>
       <img src={logo} alt='logo'/>
     </div>
     <div className={headerCss.links}>
        <NavLink to='' className={headerCss.link}>
        <span className={headerCss.xm4}> My Assignment</span>
           </NavLink>
           <NavLink to='' className={headerCss.link}>
        <span className={headerCss.xm4}> Chat with Mentor</span>
           </NavLink>
           <NavLink to='' className={headerCss.link}>
        <span className={headerCss.xmd}> Israil</span>
           </NavLink>
      </div>
        </header>
  )
}
