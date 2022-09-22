import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Base } from "@database/extends/base.extend";
import { DatabaseSchemaEnum } from "@interfaces/database/database.enum";

export const nameUserEntity = "users";

@Entity({ name: nameUserEntity, schema: DatabaseSchemaEnum.PUBLIC })
export class UserEntity extends Base {

    @Exclude({ toPlainOnly: true })
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Generated("uuid")
    @Column("uuid", { unique: true })
    uuid: string;

    @Column("text", { unique: true })
    email: string;

    @Exclude({ toPlainOnly: true })
    @Column("text")
    password: string;

    @Exclude({ toPlainOnly: true })
    @Column()
    roleId: number;

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date;

    @Exclude({ toPlainOnly: true })
    @UpdateDateColumn({ type: "timestamptz" })
    updatedAt: Date;

    @Exclude({ toPlainOnly: true })
    @DeleteDateColumn({ type: "timestamptz" })
    deletedAt: Date;

}