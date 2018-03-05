import { Injectable } from "@angular/core";
import { IAction } from "./action";
import { Reducer } from "./reducer";
@Injectable()
export class Store {
	private state: { [key: string]: any };
	private subscribers = [];

	constructor(private reducers: Reducer[], initialState = {}) {
		this.subscribers = [];
		this.reducers = reducers;
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
		this.reducers.forEach(reducer => {
			newState[reducer.key] = reducer.reduce(
				state[reducer.key],
				action
			);
		});
		return newState;
	}
}