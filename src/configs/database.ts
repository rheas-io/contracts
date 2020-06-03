import { AnyObject } from "../core/keyValue";

export interface IDbConfig extends AnyObject {
    host: string,
    port: number,
    database: string,
    options: {},
}