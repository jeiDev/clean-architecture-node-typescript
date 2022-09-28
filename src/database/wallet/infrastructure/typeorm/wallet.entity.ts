import { Base } from "@database/__utils/extends/base-typeorm.extend";
import { Exclude } from "class-transformer";
import {  Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "wallets" })
export class WalletEntity extends Base {

    @Exclude({ toPlainOnly: true })
    @PrimaryGeneratedColumn('increment')
    id: number;

}