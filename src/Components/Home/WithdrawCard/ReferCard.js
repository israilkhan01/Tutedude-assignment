import React, { useEffect, useState } from 'react'
import WiCardcss from './WithdrawCard.module.css'
import { useNavigation } from 'react-router-dom'
import Message from '../../SplashMessages/Message';

function ReferCard({ isFriendPageActive }) {
  // const navigator = useNavigation()

  const [showSplash, setShowSplash] = useState(false);
  const referCode = "EDCH54"
  console.log(isFriendPageActive)
  useEffect(() => {
    // Simulate a delay for the splash screen
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, [showSplash]);
  const copyHandler = () => {
     
     window.navigator.clipboard.writeText(referCode);
     setShowSplash(true);
     }
  return (
    <div className={`${WiCardcss.refeContainer} ${isFriendPageActive ? WiCardcss.active : ""}`}>
      <div className={`${WiCardcss.refhead}  ${isFriendPageActive ? WiCardcss.active : ""}`}>
        Your Referral Code
      </div>
      <div className={`${WiCardcss.numberContainer} ${WiCardcss.gradientBox}  ${isFriendPageActive ? WiCardcss.active : ""}`}>
        <div onClick={copyHandler} className={`${WiCardcss.refNumber} ${isFriendPageActive ? WiCardcss.active : ""}`}>
          {referCode}
        </div>
      </div>
      {
        showSplash?<Message/>:""
      }
    </div>
  )
}

export default ReferCard