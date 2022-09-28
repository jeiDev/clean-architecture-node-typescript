import { WalletEntityI } from "@database/__utils/interfaces/wallet.interface";
import _walletRepository from "../infrastructure";

const walletRepository: WalletEntityI = {
    createWallet: _walletRepository.createWallet,
    find: _walletRepository.find,
    findOne: _walletRepository.findOne,
    update: _walletRepository.update,
    delete: _walletRepository.delete,
}

export default walletRepository;