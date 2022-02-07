import axios from 'axios';

export default async function GetCourseDataAPI(teacherId) { 
    try{
        if(teacherId){
            const config = {
                headers: {
                'Content-type': 'application/json',
                },
            }
            console.log(teacherId);
            const { data } = await axios.post('/teacher/course-data',{
                teacher : teacherId
            },config)
            console.log(data.courses);
            return data.courses
            
        }
        }catch(error){
            console.log(error.response.data.message);
            return []
        }
}

