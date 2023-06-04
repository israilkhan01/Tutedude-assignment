import React from 'react'
import CardCss from "./Card.module.css"
export default function Card({friendData,key}) {
  return (
    <div key={key} className={CardCss.container}>
      <div className={CardCss.head}>
        <div className={CardCss.name}>
          {friendData.Name}
        </div>
        <div className={CardCss.date}>
          {friendData.enrolledDate}
        </div>
      </div>
      <div className={CardCss.courseNameContainer}>
        <div className={CardCss.title}>
          Courses Enrolled({friendData.coursesEnrolled.length})
        </div>
        <div className={CardCss.courseList}>
          {
            friendData.coursesEnrolled.map((course)=>{
            return (
              <div className={CardCss.courseName}>
                {course}
              </div>
            )
            })
          }
        </div>
      </div>
      <div className={CardCss.courseList}>
          <span>
          Referral Amount 
          </span>
          <strong>{friendData.referAmount}</strong>
        </div>
    </div>
  )
}
