import React from 'react'
import Stylecss from "./EnrolledList.module.css"
// import { friendEnrolledData } from '../../Helpers/ReferEnrolledHelper'
import Card from './EnrolledCard/Card'
function EnrolledList({friendEnrolledData}) {
  return (
    <div className={Stylecss.container}>
        {friendEnrolledData.map((friend,key) => {return (
            <Card key={key} friendData = {friend} />
        )})}
    </div>
  )
}

export default EnrolledList