import produce from "immer"; 
import { onValue  } from "firebase/database";

const initialState = {
    status: "void",
    data: null
}

const readData = (data) => ({
    type: "read",
    payload: data
})

export const getData = (bookRef, store) => {
    onValue(bookRef, snapshot => {  
        store.dispatch(readData(snapshot.val()))
    })
}

const dataReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        if (action.type === "read") {
            draft.data = action.payload
            draft.status = "uploaded"
            return;
        } 
    })
}

export default dataReducer;