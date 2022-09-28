import { WalletEntityI } from "@database/__utils/interfaces/wallet.interface";
import walletRepositoryTypeOrm from "./typeorm";

const _walletRepository: WalletEntityI = walletRepositoryTypeOrm;

export default _walletRepository;