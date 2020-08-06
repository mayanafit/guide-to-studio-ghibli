const initState = {
    people: [],
    person: {},
    detailMovie: {},
    filteredPeople: [],
}

const peopleReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_PEOPLE":
            return {
                ...state, people: action.payload
            }
        case "SET_SEARCH_PEOPLE":
            return  {
                ...state, filteredPeople: action.payload
            }
        case "SET_FILTERED_PEOPLE":
            return  {
                ...state, filteredPeople: []
            }
        case "SET_PERSON":
            return  {
                ...state, person: action.payload
            }
        case "SET_DETAIL_MOVIE": 
            return {
                ...state, detailMovie: action.payload
            }
        default: 
            return state
    }
}

export default peopleReducer
