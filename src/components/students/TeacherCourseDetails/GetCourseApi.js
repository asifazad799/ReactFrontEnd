import axios from 'axios';

let getCourseApi = async (props) => {

  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }
    let { data } = await axios.get(`/teacher/get-course-details?Id=${props.id.courseId}`, config)
    return data
  } catch (error) {
    console.log(error.response.data.message);
  }
}

export default getCourseApi;