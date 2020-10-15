import React from 'react';
import "./CourseCard.css"


export const CourseCard = ({ course }) => {
     return <div className="card">
          <img src={course.courseImageUrl} alt="Avatar" style={{width:450}}/>
               <div className="container">
               <h4><b>{course.courseName}</b></h4> 
               <p>Author: {course.courseAuthor} </p> 
               <p>Mail: {course.courseAuthorMail}</p>
               </div>
          </div>
}

