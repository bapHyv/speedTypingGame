export const initialGameState = {
	time: null,
	difficulty: null,
	wordsArray: [],
	wordsArrayLength: null,
	randomNumber: null,
	currentScore: 0,
	started: false,
	selectDifficultyValue: '',
	selectTimerValue: ''
};

export const gameReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TIMER':
			return {
				...state,
				time: action.payload
			};
		case 'SET_DIFFICULTY':
			return {
				...state,
				difficulty: action.payload
			};
		case 'SET_WORDS_ARRAY':
			return {
				...state,
				wordsArray: action.payload
			};
		case 'SET_WORDS_ARRAY_LENGTH':
			return {
				...state,
				wordsArrayLength: action.payload
			};
		case 'SET_RANDOM_NUMBER':
			return {
				...state,
				randomNumber: action.payload
			};
		case 'SET_START':
			return {
				...state,
				started: action.payload
			};
		case 'SET_SELECT_DIFFICULTY_VALUE':
			return {
				...state,
				selectDifficultyValue: action.payload
			};
		case 'SET_SELECT_TIMER_VALUE':
			return {
				...state,
				selectTimerValue: action.payload
			};
		case 'RESET_SELECT_TIMER_VALUE':
			return {
				...state,
				selectTimerValue: ''
			};
		case 'RESET_SELECT_DIFFICULTY_VALUE':
			return {
				...state,
				selectDifficultyValue: ''
			};
		case 'RESET_SCORE':
			return {
				...state,
				currentScore: 0
			};
		case 'RESET_INITIAL_STATE':
			return {
				...state,
				time: null,
				difficulty: '',
				randomNumber: null,
				started: false,
				selectDifficultyValue: '',
				selectTimerValue: ''
			};
		case 'UPDATE_CURRENT_SCORE':
			return {
				...state,
				currentScore: state.currentScore + 1
			};
		case 'TIME_RUNNING':
			return {
				...state,
				time: state.time - action.payload
			};
		default:
			return state;
	}
};
