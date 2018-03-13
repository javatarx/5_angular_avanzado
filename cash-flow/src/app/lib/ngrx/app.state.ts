import { IBlock } from "./blockchain/block.model";

export interface IAppState {
	readonly blockchain: IBlock[];
}
