import { Action } from "./action";
import * as actions from "./actions";

export const initialState = {
	isAnonymous: true,
	token: ""
};

export function reducer(state = initialState, action: Action) {
	switch (action.type) {
		case actions.LOGIN_USER: {
			const token = action.payload;
			console.log("reducer:action.payload:", token);
			return {
				...state,
				isAnonymous: token === null,
				token
			};
		}
	}

	return state;
}
