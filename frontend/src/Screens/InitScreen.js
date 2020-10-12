import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const { default: Axios } = require("axios");

function InitScreen(props){

    useEffect(()=>{
        Axios.get('/api/create')
        
    },[]);
    return <div> init screen</div>
}
export default InitScreen;