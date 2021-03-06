import { IConfig } from './config';

export interface IProviderConfig {
    clientId: string;
    clientSecret: string;
}

export interface IFacebookProvider extends IProviderConfig {
    version?: string;
}

export interface IAuthConfig extends IConfig {}
