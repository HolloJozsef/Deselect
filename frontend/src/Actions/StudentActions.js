import { STUDENT_LIST_FAIL, STUDENT_LIST_REQUEST, STUDENT_LIST_SUCCESS, STUDENT_REGISTER_FAIL, STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS } from "../constants/studentConstants";

const { default: Axios } = require("axios");

const register=(id, firstName,lastName,age,nationality)=> async (dispatch) => {
    dispatch({ type: STUDENT_REGISTER_REQUEST, payload: { id, firstName,lastName,age,nationality } });
    try {
      const { data } = await Axios.post("/api/save", { id, firstName,lastName,age,nationality });
      dispatch({ type: STUDENT_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({type: STUDENT_REGISTER_FAIL, payload: error.message });
    }
  }
  
  const listStudents=()=>async (dispatch)=>
  {
      try{
      dispatch({type:STUDENT_LIST_REQUEST});
      const {data}=await Axios.get("/api/allStudents");
      dispatch ({type:STUDENT_LIST_SUCCESS, payload:data});
      }catch(error){
          dispatch({type:STUDENT_LIST_FAIL, payload:error.message});
      }
  }

export {register,listStudents};
