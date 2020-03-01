export const initialGameState = {
    time: null,
    difficulty: null
}

export const gameReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TIMER':
            return {
                ...state,
                time: action.payload
            }
        case 'SET_DIFFICULTY':
            return {
                ...state,
                difficulty: action.payload
            }
        case 'TIME_RUNNING':
            return {
                ...state,
                time: state.time - action.payload
            }
        default:
            return state
    }
}