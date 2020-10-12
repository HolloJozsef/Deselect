import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../Actions/StudentActions';

function NewScreen(props){

    const [id,setId]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [age,setAge]=useState('');
    const [nationality,setNationality]=useState('');


    const dispatch = useDispatch();

    useEffect(()=>{
      
        return()=>{
            //
        };
    },[]);
const SubmitHandler=(e)=>{
  
    dispatch(register(id, firstName,lastName,age,nationality));
}
    

 
    return <div className="form">
       <form onSubmit={SubmitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create User</h2>
                </li>
              
                <li>
                    <label htmlFor="id">
                        Id
                    </label>
                    <input name="id" id="id" onChange={(e)=>setId(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input type="name" name="firstName" id="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input type="lastName" name="lastName" id="lastName" onChange={(e)=>setLastName(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="age">
                        Age
                    </label>
                    <input type="age" name="age" id="age" onChange={(e)=>setAge(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="nationality">
                       Nationality
                    </label>
                    <input type="nationality" name="nationality" id="nationality" onChange={(e)=>setNationality(e.target.value)}/>
                </li>
               
                <li>
                    <button className="button" type="submit">Submit</button>
                </li>
               
               
            </ul>
        </form>
    </div>
}
export default NewScreen;