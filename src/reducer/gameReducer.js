export const initialGameState = {
    timer: 0,
    difficulty: ''
}

export const gameReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TIMER':
            return {
                ...state,
                timer: action.payload
            }
        case 'SET_DIFFICULTY':
            return {
                ...state,
                difficulty: action.payload
            }
        default:
            return state
    }
}