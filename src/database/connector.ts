import { IDbConfig } from "./config";

export interface IDbConnector {
    connect(config: IDbConfig): Promise<any>
}