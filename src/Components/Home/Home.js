import React, { useState } from 'react'
import homeCss from './Home.module.css'
import WithdrawCard from './WithdrawCard/WithdrawCard'
import ReferCard from './WithdrawCard/ReferCard';
import ExplainComponent from './ExplainComponent/ExplainComponent';
import EnrolledList from '../FriendsEnrolled/EnrolledList';

function Home() {
  const [Enrolloggle,setEnrolledoggle] = useState(0);
  return (
    <div className={homeCss.container}> 
       <div className={homeCss.cardCatainer}>
             <WithdrawCard />
             <ReferCard/>
       </div>
      <ExplainComponent/>
      <section className={homeCss.section1}>
        <div className={homeCss.buttons}>
        Friends Who Enrolled
        </div>
        {/* <EnrolledList /> */}

      </section>
    </div>
  )
}

export default Home