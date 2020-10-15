import axios from "axios";

const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/courses/`;

class CourseDataService {
  retrieveAllCourses() {
    return axios.get(`${INSTRUCTOR_API_URL}/all`);
  }
  getCourseById(id) {
    return axios.get(`${INSTRUCTOR_API_URL}/course?id=`+id);
  }
  addNewCourse(course) {
    return axios.post(`${INSTRUCTOR_API_URL}/addCourse`, course);
  }
  updateCourse(course) {
    return axios.post(`${INSTRUCTOR_API_URL}/updateCourse`, course);
  }
  deleteCourse(id) {
    return axios.delete(`${INSTRUCTOR_API_URL}/deleteCourse?courseId=`+id)
  }
}

export default new CourseDataService();
