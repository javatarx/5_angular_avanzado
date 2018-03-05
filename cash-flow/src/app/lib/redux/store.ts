import { Injectable } from "@angular/core";
import { IAction } from "./action";
import { Slice } from "./reducer";
@Injectable()
export class Store {
	private state: { [key: string]: any };
	private subscribers = [];

	constructor(private slices: Slice[], initialState = {}) {
		this.subscribers = [];
		this.slices = slices;
		this.state = this.reduce(initialState, { type: "" });
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
			newState[slice.key] = slice.reducer(
				state[slice.key],
				action
			);
		});
		return newState;
	}
}
