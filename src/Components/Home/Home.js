import React, { useEffect, useState } from 'react'
import homeCss from './Home.module.css'
import WithdrawCard from './WithdrawCard/WithdrawCard'
import ReferCard from './WithdrawCard/ReferCard';
import ExplainComponent from './ExplainComponent/ExplainComponent';
import EnrolledList from '../FriendsEnrolled/EnrolledList';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [Enrolloggle,setEnrolledoggle] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let LandingPage = document.querySelector(`.${homeCss.container}`);
    // console.log("Home mounted", LandingPage);
    setTimeout(function () {
      LandingPage.style.opacity = "1";
      LandingPage.style.padding = "0em";

      window.scroll({
        top: 0,
        left: 0,
      });
    }, 500);
  }, [])
  return (
    <div className={homeCss.container}> 
       <div className={homeCss.cardCatainer}>
             <WithdrawCard  active={true} />
             <ReferCard/>
       </div>
      <ExplainComponent/>
      <section className={homeCss.section1}>
        <div className={homeCss.buttons} onClick={()=>navigate("/friendrefer")}>
        Friends Who Enrolled
        </div>
        {/* <EnrolledList /> */}

      </section>
    </div>
  )
}

export default Home