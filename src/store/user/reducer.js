import * as constants from './constants'

const INITIAL_STATE = {
	user: null,
	loading: true,
	events: []
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case constants.SAVE_USER:
			return Object.assign({}, state, {
				loading: false,
				user: action.payload
			})
		case constants.ADD_EVENT:
			return Object.assign({}, state, {
				// loading: false,
				events: action.payload
			})
		case constants.SET_LOADING:
			return Object.assign({}, state, {
				loading: action.payload
			})
		default: return state
	}
}

export default userReducer