export default function  siteReducer(state,action){
    switch (action.type)
    {
        case 'CHANGE_LANG':
            return {
                ...state,
                language: action.value
            }
        case 'SWITCH_THEME':
            return {
                ...state,
                theme: action.value
            }
        default:
            return {
            ...state
        }
    }
}
