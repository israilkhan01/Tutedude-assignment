import React from 'react'
import Stylecss from "./Goback.module.css"
import gobackIcon from '../../assets/goback.svg'
import { useNavigate } from 'react-router-dom'
function Goback({path}) {
    const navigate = useNavigate();
  return (
    <button className={Stylecss.btn} onClick={()=>navigate(path)}>
       <img src={gobackIcon} alt="" /> 
       <span>
        go back
       </span>
       </button>
  )
}

export default Goback