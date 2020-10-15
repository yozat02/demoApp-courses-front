import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseDataService from "../services/CourseDataService";
import {columns,addNewCourse,updateCourse,deleteCourse } from "./ListCourses.conf"
import MaterialTable from 'material-table';

export const ListCourses = () => {
  let [courses, setData] = useState(null);
  let history = useHistory();

  useEffect(() => {
    CourseDataService.retrieveAllCourses().then((response) => {
      !courses && setData(response.data);
    });
  });
   const handleRowClick = (event, rowData) => {
      history.push("/course/"+rowData.courseId)
  };

  return (
    <div className="container">
      <div className="container">
       {courses && <MaterialTable
            title="Courses"
            columns={columns}
            data={courses}
            editable={{
              onRowAdd: newData => addNewCourse(newData,setData,CourseDataService,courses),
              onRowUpdate: (newData,oldData) => updateCourse(newData,oldData,setData,CourseDataService,courses),
              onRowDelete: oldData => deleteCourse(oldData,setData,CourseDataService,courses),
                }}    
            options={{
              actionsColumnIndex: -1,
              paging : false
            }}
            onRowClick={handleRowClick}
      />}
      </div>
    </div>
  );
};
