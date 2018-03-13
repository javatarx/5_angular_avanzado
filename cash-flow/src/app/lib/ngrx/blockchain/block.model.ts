export interface IBlock {
	index: number;
	description: string;
	size: number;
	timestamp: Date;
	hash: string;
	previousHash: string;
}
