import React, { useEffect } from 'react'
import EnrolledList from "../../FriendsEnrolled/EnrolledList"
import Stylecss from "./FriendRefered.module.css"
import { friendEnrolledData } from '../../../Helpers/ReferEnrolledHelper'
import WithdrawCard from '../../Home/WithdrawCard/WithdrawCard';
import ReferCard from '../../Home/WithdrawCard/ReferCard';
import Goback from '../../Navigation/Goback';

function FriendRefered() {
  useEffect(() => {
    let LandingPage = document.querySelector(`.${Stylecss.section1}`);
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
    <section className={Stylecss.section1}>
      <Goback path={'/'} />
      <div className={Stylecss.cardCatainer}>
        <WithdrawCard active={false} />
        <ReferCard isFriendPageActive={true} linspaceing = {Stylecss.ReferCardFrontStyle} />
      </div>
      <div className={Stylecss.buttons}>
        Friends Who Enrolled({friendEnrolledData.length > 0 ? friendEnrolledData.length : ""})
      </div>
      <EnrolledList friendEnrolledData={friendEnrolledData} />

    </section>
  )
}

export default FriendRefered