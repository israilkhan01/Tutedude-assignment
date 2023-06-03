import React from 'react'
import homeCss from './Home.module.css'
import WithdrawCard from './WithdrawCard/WithdrawCard'
function Home() {
  return (
    <div className={homeCss.container}> 
       <div className={homeCss.cardCatainer}>
             <WithdrawCard />
       </div>
    </div>
  )
}

export default Home