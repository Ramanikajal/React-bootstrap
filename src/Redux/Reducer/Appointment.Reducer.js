const initalState = {
    Appdata : []
}

const appDelta = (state = initalState , action) => {
    if(action.type === 'ADDMEDICINE') {
        return { ...state , Appdata : [...state.Appdata,action.payload]}
    }
    return state
}
export default appDelta