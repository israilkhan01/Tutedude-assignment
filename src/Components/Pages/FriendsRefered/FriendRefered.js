import React from 'react'
import EnrolledList from "../../FriendsEnrolled/EnrolledList"
import Stylecss from "./FriendRefered.module.css"
import { friendEnrolledData } from '../../../Helpers/ReferEnrolledHelper'
import WithdrawCard from '../../Home/WithdrawCard/WithdrawCard';
import ReferCard from '../../Home/WithdrawCard/ReferCard';
import Goback from '../../Navigation/Goback';

function FriendRefered() {
  return (
    <section className={Stylecss.section1}>
      <Goback/>
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