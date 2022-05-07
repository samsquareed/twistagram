import {combineReducers} from "redux"

import auth from "./auth"
import posts from "./posts"
import otheuser from "./otheruser"
import othersposts from "./othersposts"
export default combineReducers({
    auth,
    posts,
    otheuser,
    othersposts
})