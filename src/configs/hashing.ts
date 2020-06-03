import { AnyObject } from "../core/keyValue";

export interface IBcryptConfig extends AnyObject {
    rounds: number;
}

export interface IArgonConfig extends AnyObject {
    memory: number,
    threads: number,
    time: number
}

export interface IHashConfig extends AnyObject {
    key: string,
    driver: string,
    bcrypt: IBcryptConfig,
    argon: IArgonConfig
}