import { IDbConfig } from '../configs';

export interface IDbConnector {
    _config: IDbConfig;

    connect(): Promise<any>;
}
