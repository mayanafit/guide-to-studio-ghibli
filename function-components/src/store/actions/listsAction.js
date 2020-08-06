
export const addList = (movie) => {
    return {
        type: `ADD_LIST`,
        payload: movie,
    }
}

export const deleteList = (movie) => {
    return {
        type: `DELETE_LIST`,
        payload: movie,
    }
}