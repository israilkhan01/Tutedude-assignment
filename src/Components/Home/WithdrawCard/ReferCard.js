import React from 'react'
import WiCardcss from './WithdrawCard.module.css'

function ReferCard({isFriendPageActive}) {
  console.log(isFriendPageActive)
  return (
    <div className={`${WiCardcss.refeContainer} ${isFriendPageActive?WiCardcss.active:""}`}>
        <div  className={`${WiCardcss.refhead}  ${isFriendPageActive?WiCardcss.active:""}`}>
            Your Referral Code
        </div>
        <div  className={`${WiCardcss.numberContainer} ${WiCardcss.gradientBox}  ${isFriendPageActive?WiCardcss.active:""}`}>
            <div className={`${WiCardcss.refNumber} ${isFriendPageActive?WiCardcss.active:""}`}>
            EDCH54
            </div>
        </div>
    </div>
  )
}

export default ReferCard