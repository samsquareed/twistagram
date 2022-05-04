import {LOGIN, LOGOUT} from "../constants/actionTypes"

const authReducer = (state = { authData : null}, action) =>{
    switch(action.type){
        case LOGIN :
            return
        case LOGOUT :
            return 
        default :
            return state
    }
}

export default authReducer;