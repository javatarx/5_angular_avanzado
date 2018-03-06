import { IBlockchain } from "./blokchain/blockchain.model";

export interface IAppState {
	readonly blockchain: IBlockchain[];
}
