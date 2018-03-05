import { Injectable } from "@angular/core";
import { Action } from "./action";
import { Reducer } from "./reducer";
@Injectable()
export class Store {
	private state: { [key: string]: any };
	private subscribers = [];

	constructor(private reducers: Reducer[], initialState = {}) {
		this.subscribers = [];
		this.reducers = reducers;
		this.state = this.reduce(initialState, new Action());
	}

	get value() {
		return this.state;
	}

	subscribe(subscriber) {
		this.subscribers = [...this.subscribers, subscriber];
		this.notifySubscribers();
	}

	dispatch(action: Action) {
		this.state = this.reduce(this.state, action);
		this.notifySubscribers();
	}

	private notifySubscribers() {
		this.subscribers.forEach(subscriber => {
			console.log("notifySubscribers:", this.value);
			subscriber(this.value);
		});
	}

	private reduce(state, action: Action) {
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
