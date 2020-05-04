import { IDbConfig } from "./config";
export interface IDbConnector {
    _config: IDbConfig;
    connect(): Promise<any>;
}
