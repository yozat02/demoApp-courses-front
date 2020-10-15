import React from "react";

export const columns = [
        { title: '', field: 'courseImageUrl', render: rowData => <img src={rowData.courseImageUrl} style={{width: 40}}/> },
        { title: 'Name', field: 'courseName' },
        { title: 'Author', field: 'courseAuthor' },
        { title: 'Author Mail', field: 'courseAuthorMail'}
]
      

export const addNewCourse = (newData,setData,CourseDataService,courses) => {
     return new Promise((resolve, reject) => {
            setTimeout(() => {
              newData={...newData,courseId:courses.length*2+100}
              setData([...courses, newData]);
              CourseDataService.addNewCourse({
                ...newData,
                courseId: courses.length*2+100
              })
              resolve();
            }, 1000)
          })
}

export const updateCourse = (newData,oldData,setData,CourseDataService,courses) => {
     return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...courses];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              CourseDataService.updateCourse(newData)
              resolve();
            }, 1000)
          })
}

export const deleteCourse = (oldData,setData,CourseDataService,courses) => {
     return new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...courses];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              CourseDataService.deleteCourse(oldData.courseId);
              resolve()
            }, 1000)
          })
}