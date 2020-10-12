import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { listStudents } from '../Actions/StudentActions';
const { default: Axios } = require("axios");
function HomeScreen(props){

const [students,setStudents]=useState([]);
const [selectedValue,setSelectedValue]=useState([]);
  useEffect(()=>{
      Axios.get('/api/allStudents')
      .then(response=>{
        setStudents(response.data);
      })
  },[]);
  const SubmitHandler=(e)=>{
    setSelectedValue(students.nationality);
}
const handleChange=obj=>{
    setSelectedValue(obj.nationality);
}
return  <div>
<form onSubmit={SubmitHandler}>
 <div className = "product-list">
    
        <select>
            {
            students.map(student=>   
                        <option onChange={handleChange} value={selectedValue} >{student.nationality}</option>
            )
            }
        </select>

    <div>
    <button className="button" type="submit">Submit</button>
    </div>
</div>
</form>  
        <pre> {(JSON.stringify(selectedValue,null,2))} </pre>
</div>
}
export default HomeScreen;