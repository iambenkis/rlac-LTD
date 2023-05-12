import produce from "immer";
 // eslint-disable-next-line no-unused-vars
import  appConfig  from '../data/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Fetching, FETCHING, Rejected, REJECTED, Resolved, RESOLVED } from "./actions";


const initialState = {
    status: "void",
    data: null,
    error: null
}

const selectLogin = (state) => state.login;

export const fetchLoginAuth = (auth, email, password,store) => {
    const status = selectLogin(store.getState()).status;
    if (status === 'pending' || status === 'updating') {
        return;
    }

    store.dispatch(Fetching());
    signInWithEmailAndPassword(auth, email, password)
    .then(cred => { 
        store.dispatch(Resolved(cred.user))
        localStorage.setItem("token", cred.user.accessToken)
    })
    .catch(err => { 
        store.dispatch(Rejected(err.message))
    })
} 

const loginReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCHING: {
                if (draft.status === 'void') {
                    draft.status = 'pending'
                    return;
                }

                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'pending'
                    return;
                }
                if (draft.status === 'resolved') {
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
                if(draft.status === "pending" || draft.status === "updating") {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = "rejected"
                    return;
                }
                return;
            }
            default:
                return;
        }
    })
}

export default loginReducer;