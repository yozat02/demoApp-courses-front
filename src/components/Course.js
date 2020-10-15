import React, {useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import CourseDataService from "../services/CourseDataService";
import { CourseCard } from './CourseCard/CourseCard';

const Course = (props) => {

     const { id } = props.match.params;
     let [course, setData] = useState(null);
     useEffect(() => {
          CourseDataService.getCourseById(id).then((response) => {
               !course && setData(response.data);
          });
     }, [course]);
     
     return course ? <div style={{ display: "flex",justifyContent:"center"}}>
          <CourseCard course={course}/>
     </div> : <div>Loading ... </div>
}


export default withRouter(Course);