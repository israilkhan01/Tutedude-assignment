import React from 'react'
import headerCss from './Header.module.css'
import logo from '../../assets/logo.svg'
import profilogo from '../../assets/Vectorprofile.svg'
import dropdownIcon from '../../assets/Vectordrop.svg'
import { NavLink, Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className={headerCss.head}>
      <div className={headerCss.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={headerCss.links}>
        <NavLink to='' className={headerCss.link}>
          <div className={headerCss.xm4}> My Assignment</div>
        </NavLink>
        <NavLink to='' className={headerCss.link}>
          <div className={headerCss.xm4}> Chat with Mentor</div>
        </NavLink>
        <NavLink to='/' activeClassName={headerCss.active} className={headerCss.prlink}>
          <div className={headerCss.prof}>
          <div className={headerCss.lgp}>
            <img src={profilogo} alt=':-)' />
          </div>
          <div className={headerCss.xmd}> ProfileName</div>
          <div className={headerCss.dpl}>
            <img src={dropdownIcon} alt=':-)' />
          </div>
          </div>
          
        </NavLink>
      </div>
    </header>
  )
}
