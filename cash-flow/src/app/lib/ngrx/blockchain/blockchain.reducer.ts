import { Action } from "@ngrx/store";
import { IBlock } from "./block.model";

export const ADD_OPERATION = "ADD_OPERATION";

export function blockchainReducer(
	state: IBlock[] = [],
	action
) {
	switch (action.type) {
		case ADD_OPERATION:
			const block: IBlock = action.payload;
			const previousBlock = state[state.length - 1];
			block.index = state.length;
			block.timestamp = new Date();
			block.previousHash = previousBlock
				? previousBlock.hash
				: "";
			block.hash = block.timestamp
				.getTime()
				.toExponential(10)
				.substring(2, 12);
			return [...state, action.payload];
		default:
			return state;
	}
}
