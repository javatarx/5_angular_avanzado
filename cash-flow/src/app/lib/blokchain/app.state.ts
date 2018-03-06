import { IBlockchain } from "./blockchain.model";

export interface IAppState {
	readonly blockchain: IBlockchain[];
}
