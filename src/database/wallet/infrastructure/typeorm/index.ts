import  connection  from '@database/__utils/connections/typeorm';
import { WalletEntityI } from '@database/__utils/interfaces/wallet.interface';

import createWallet from "./create.repository";

const methods: WalletEntityI = {
    createWallet: function (): any {
        return createWallet(this);
    },

    find: function (): any {
        
    },

    findOne: function (): any {
        
    },

    update: function (): any {
        
    },

    delete: function (): any {
        
    }
}

const walletRepositoryTypeOrm: WalletEntityI  = connection.getRepository(() => {}).extend(methods);

export default walletRepositoryTypeOrm;