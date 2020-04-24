import { IDbConnector } from "./connector";
export interface IDbConfig {
    host: string;
    port: number;
    database: string;
    options: {};
    connector: IDbConnector;
}
