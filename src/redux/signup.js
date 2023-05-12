import produce from "immer";
// import  appConfig  from '../data/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import { Fetching, Rejected, Resolved } from "./actions";
import { FETCHING, RESOLVED, REJECTED } from "./actions";
// import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    status: "void",
    data: null,
    error: null
}

const selectSignin = (state) => state.signup
export const fetchSignupAuth = (auth, email, password,store) => { 
    const status = selectSignin(store.getState()).status 
    if (status === 'pending' || status === 'updating') {
        return
    }

    store.dispatch(Fetching())
    createUserWithEmailAndPassword( auth, email, password )
    .then((cred) => { 
        store.dispatch(Resolved(cred.user))  
        localStorage.setItem("signed", true)
    })
    .catch((err) => { 
        store.dispatch(Rejected(err.message)) 
    }) 
}

const signupReducer = (state = initialState, action) => { 
    return produce(state, (draft) => {
        switch(action.type) {
            case FETCHING: { 
                if (draft.status === 'void'){
                    draft.status = 'pending'
                    // console.log(draft)
                    return;
                }
                if (draft.status === 'rejected'){
                    draft.err = null
                    draft.status = 'pending'
                    return;
                }
                if (draft.status === 'resolved'){
                    draft.status = 'updating'
                    return;
                }
                return;
            } 
            
            case RESOLVED: {
                if (draft.status === "pending" || draft.status === "updating") {
                    draft.data = action.payload;
                    draft.status = "resolved"
                    
                    return;
                }
                return;
            }

            case REJECTED: {
                if (draft.status === "pending" || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = "rejected"
                    return;
                }
                return;
            }

            default:
                return
        }
    }) 
}

export default signupReducer;