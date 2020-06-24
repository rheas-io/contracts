export interface IProviderConfig {
    clientId: string,
    clientSecret: string,
    callbackUrl?: string
}

export interface IFacebookProvider extends IProviderConfig {
    version?: string;
}

export interface IAuthConfig {

}