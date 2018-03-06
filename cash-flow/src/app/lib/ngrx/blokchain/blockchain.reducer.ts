import { Action } from "@ngrx/store";
import { IBlockchain } from "./blockchain.model";

export const ADD_OPERATION = "ADD_OPERATION";

export function blockchainReducer(
	state: IBlockchain[] = [],
	action
) {
	switch (action.type) {
		case ADD_OPERATION:
			action.payload.timestamp = new Date();
			return [...state, action.payload];
		default:
			return state;
	}
}