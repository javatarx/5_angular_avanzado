export class Reducer {
	constructor(
		public key: string,
		public reduce: (any, string) => any
	) {}
}
