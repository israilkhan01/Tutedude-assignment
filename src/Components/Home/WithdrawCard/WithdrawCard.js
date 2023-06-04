import React, { useState } from 'react'
import WiCardcss from './WithdrawCard.module.css'
function WithdrawCard({active}) {
    const [isActiveAll,setisActiveAll] = useState()
    return (
        <div className={`${WiCardcss.container} ${!active? WiCardcss.Containeractive:""}`}>
            {active?<> <div className={WiCardcss.items}>
                <div className={WiCardcss.head}>
                    Referral Earning
                </div>
                <div className={WiCardcss.value}>
                ₹ 2,500
                </div>
            </div>
            <div className={WiCardcss.items}>
                <div className={WiCardcss.head}>
                Total Referrals
                </div>
                <div className={WiCardcss.value}>
                    7
                </div>
            </div> </>:""}

            <div className={WiCardcss.items}>
                <div className={WiCardcss.head}>
                Wallet Balance
                </div>
                <div className={`${WiCardcss.value} ${!active? WiCardcss.active:""}`}>
                ₹ 500
                </div>
            </div>

           {active?
            <div className={WiCardcss.items}>
                <button id={WiCardcss.withdrawbtn}>
                Withdraw Balance
                </button>
            </div>:""
           }
        </div>
    )
}

export default WithdrawCard;