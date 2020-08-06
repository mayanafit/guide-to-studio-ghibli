const initState = {
    buttonRemove: false,
}

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_BUTTON_REMOVE":
            return {
                ...state, buttonRemove: action.payload
            }
        default: 
            return state
    }
}

export default homeReducer