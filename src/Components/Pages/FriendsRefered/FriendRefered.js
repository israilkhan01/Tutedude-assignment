import React from 'react'
import EnrolledList from "../../FriendsEnrolled/EnrolledList"
import Stylecss from "./FriendRefered.module.css"
import { friendEnrolledData } from '../../../Helpers/ReferEnrolledHelper'
import WithdrawCard from '../../Home/WithdrawCard/WithdrawCard';
import ReferCard from '../../Home/WithdrawCard/ReferCard';
function FriendRefered() {
  // const Styles = {
  //   Cardheading: {
  //     "fontWeight": 400,
  //     "fontSize": '16px',
  //     "lineHeight": "24px"
  //   },
  //   refeContainer :{
  //     "marginLeft":'unset'
  //   },
  //   borderStyle :{
  //     "border":" 1px solid lightgray",
  //     "borderRadius":"8px",
  //     "padding":"10px 4px 10px 15px"
  //   }
  // }
  console.log(Stylecss.ReferCardFrontStyle)
  return (
    <section className={Stylecss.section1}>
      <div className={Stylecss.cardCatainer}>
        <WithdrawCard active={false} />
        <ReferCard linspaceing = {Stylecss.ReferCardFrontStyle} Styles={Styles}/>
      </div>
      <div className={Stylecss.buttons}>
        Friends Who Enrolled({friendEnrolledData.length > 0 ? friendEnrolledData.length : ""})
      </div>
      <EnrolledList friendEnrolledData={friendEnrolledData} />

    </section>
  )
}

export default FriendRefered