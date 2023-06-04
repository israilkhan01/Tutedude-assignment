import React from 'react'
import WiCardcss from './WithdrawCard.module.css'

function ReferCard({Styles,linspaceing}) {
  console.log(linspaceing)
  return (
    <div style={Styles.refeContainer} className={WiCardcss.refeContainer}>
        <div style={Styles.Cardheading} className={WiCardcss.refhead}>
            Your Referral Code
        </div>
        <div style={Styles.borderStyle} className={`${WiCardcss.numberContainer} ${WiCardcss.gradientBox}`}>
            <div className={`${WiCardcss.refNumber} ${linspaceing}`}>
            EDCH54
            </div>
        </div>
    </div>
  )
}

export default ReferCard