import { ModelDatabaseI } from "./model.interface";

export interface WalletEntityI extends ModelDatabaseI{
    createWallet: Function
}