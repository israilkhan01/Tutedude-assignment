import React from 'react'
import Stylecss from "./Goback.module.css"
import gobackIcon from '../../assets/goback.svg'
function Goback() {
  return (
    <button className={Stylecss.btn}>
       <img src={gobackIcon} alt="" /> 
       <span>
        go back
       </span>
       </button>
  )
}

export default Goback