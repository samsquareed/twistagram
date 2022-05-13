import {FETCHOTHERSPOSTS} from "../constants/actionTypes"

const othersPostReducer = (othersposts = [], action) => {
    switch (action.type) {
        case FETCHOTHERSPOSTS:
            return [...action?.payload].reverse()
        default:
            return othersposts;
    }
}

export default othersPostReducer