import { IAction } from "./action";
import * as actions from "./actions";
import { UserState } from "./userState";

export const initialState: UserState = {
	isAnonymous: true,
	token: ""
};

export function reducer(
	state: UserState = initialState,
	action: IAction
) {
	switch (action.type) {
		case actions.LOGIN_USER: {
			const token = action.payload;
			return {
				...state,
				isAnonymous: token === null,
				token
			};
		}
	}

	return state;
}
