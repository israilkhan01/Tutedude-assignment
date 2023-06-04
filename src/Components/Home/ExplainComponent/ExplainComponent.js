import React from 'react'
import Style from './ExplainComponent.module.css'
import inviteSvg from '../../../assets/Vectorinvite.svg'
import discount from '../../../assets/Vectordiscount.svg'
import refer from '../../../assets/Vectorrefer.svg'
import wallet from '../../../assets/Vectorwallet.svg'
import rupee from '../../../assets/rupee.svg'
import { data } from '../../../Helpers/ExplainComponentHelper'
function ExplainComponent() {
  return (
    <div className={Style.container}>
      <h1 className={Style.head}>
        How does it work ?
      </h1>
      <div className={Style.workCont}>
        {
          data.map((val, key) => {
            return (
              <div className={Style.card}>
                <div className={Style.logCon}>
                  <img src={val.logo} alt='icon' />
                </div>
                <div className={Style.desContainer}>
                  <p>
                    {val.title}
                  </p>
                  <div className={Style.des}>
                    {val.description}
                  </div>
                </div>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default ExplainComponent