import {GETOTHERUSER} from "../constants/actionTypes"

const otherUserReducer = (otheruser = { authData : null}, action) =>{
    switch(action.type){
        case GETOTHERUSER :
            return {...otheruser, authData : action?.payload}
        default :
            return otheruser;
    }
};

export default otherUserReducer