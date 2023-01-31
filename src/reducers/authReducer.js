export default function authReducer(state,action){
    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.value
            }
        case 'LOGOUT':
            return{
                ...state,
                user: action.value
            }
        default:
            return {
                ...state
            }
    }
}
