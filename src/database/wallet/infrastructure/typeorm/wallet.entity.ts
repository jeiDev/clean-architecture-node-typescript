import { Base } from "@database/__utils/extends/base-typeorm.extend";
import { Exclude } from "class-transformer";
import {  Entity, PrimaryGeneratedColumn } from "typeorm";

export const nameAccountLog = "account-logs";

@Entity({ name: nameAccountLog })
export class WalletEntity extends Base {

    @Exclude({ toPlainOnly: true })
    @PrimaryGeneratedColumn('increment')
    id: number;

}