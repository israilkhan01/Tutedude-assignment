import React from 'react'
import NaviCss from './Navigation.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
function Navigation() {
  const pathname = useLocation().pathname;
  const defaultPath = ["UI/UX","Refer & Earn"]
  switch (pathname){
    case "/friendrefer": defaultPath.push("Friends Referred");
                        break;
                        default:
  }
  console.log(pathname)
  return (

    <div className={NaviCss.container}>
        {defaultPath.join("  > ")}
    </div>
  )
}

export default Navigation