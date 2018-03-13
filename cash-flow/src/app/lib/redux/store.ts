import { Injectable } from "@angular/core";
import { IAction } from "./action";
import { Slice } from "./slice";
@Injectable()
export class Store {
	private state: { [key: string]: any };
	private subscribers = [];

	constructor(private slices: Slice[]) {
		const initialState = {};
		const initialActionType = "";
		const initialActionPayload = null;
		const initialAction = {
			type: initialActionType,
			payload: initialActionPayload
		};
		this.state = this.reduce(initialState, initialAction);
	}

	get value() {
		return this.state;
	}

	subscribe(subscriber) {
		this.subscribers = [...this.subscribers, subscriber];
		this.notifySubscribers();
	}

	dispatch(action: IAction) {
		this.state = this.reduce(this.state, action);
		this.notifySubscribers();
	}

	private notifySubscribers() {
		this.subscribers.forEach(subscriber => {
			subscriber(this.value);
		});
	}

	private reduce(state, action: IAction) {
		const newState = {};
		this.slices.forEach(slice => {
			newState[slice.key] = this.reduceSlice(
				slice,
				state,
				action
			);
		});
		return newState;
	}

	private reduceSlice(slice: Slice, state, action: IAction) {
		return slice.reducer(state[slice.key], action);
	}
}
