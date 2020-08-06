const initState = {
    lists: [],
}

const listsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_LIST":  
            return {
                ...state, lists: state.lists.concat(action.payload)
            };
        case "DELETE_LIST":
            return {
                ...state, lists: state.lists.filter(list => list.id !== action.payload.id)
            }
        default: 
            return state
    }
}

export default listsReducer