export class Slice {
	constructor(
		public key: string,
		public reducer: (any, IAction) => any
	) {}
}
