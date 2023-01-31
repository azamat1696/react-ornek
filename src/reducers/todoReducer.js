function reducer(state,payload){
    console.log('sdsdsdsdsd',{...state})
    switch (payload.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: payload.value
            }
        case 'ADD_TODO':
            return {
                ...state,
                todo: '',
                todos: [
                    ...state.todos,
                    payload.todo
                ]
            }
    }
}
export default reducer;
