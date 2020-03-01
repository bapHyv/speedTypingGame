export const initialGameState = {
    timer: 0
}

export const gameReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TIMER':
            return {
                ...state,
                timer: action.payload
            }
        default:
            return state
    }
}