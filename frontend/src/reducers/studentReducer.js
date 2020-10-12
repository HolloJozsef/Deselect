import { STUDENT_LIST_FAIL, STUDENT_LIST_REQUEST, STUDENT_LIST_SUCCESS, STUDENT_REGISTER_FAIL, STUDENT_REGISTER_REQUEST, STUDENT_REGISTER_SUCCESS } from "../constants/studentConstants";


function studentRegisterReducer(state={},action){
    switch(action.type){
        case STUDENT_REGISTER_REQUEST:
            return {loading:true};
        case STUDENT_REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload};
        case STUDENT_REGISTER_FAIL:
            return {loading:false, error:action.payload};
        default: return state;
    }
}

function studentListReducer(state={},action){
    switch(action.type){
        case STUDENT_LIST_REQUEST:
            return {loading:true};
        case STUDENT_LIST_SUCCESS:
            return {loading:false, students:action.payload};
        case STUDENT_LIST_FAIL:
            return {loading:false, error:action.payload};
        default: return state;
    }
}
export{studentRegisterReducer,studentListReducer};