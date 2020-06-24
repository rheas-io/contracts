export interface IOauthProvider {
    /**
     * Returns the provider client id
     *
     * @returns string
     */
    getClientId(): string;
    /**
     * Returns the provider client secret
     *
     * @returns string
     */
    getClientSecret(): string;
    /**
     * Returns the url where authorization request has to be made
     *
     * @returns string
     */
    getAuthUrl(): string;
    /**
     * Returns the url where token requests are made.
     *
     * @returns string
     */
    getTokenUrl(): string;
    /**
     * Returns the url from where user details can be retreived.
     *
     * @returns string
     */
    getProfileUrl(): string;
    /**
     * Returns the url where users are redirected after an authorization
     * req is processed by the provider. This is an endpoint on the app.
     *
     * @returns string
     */
    getCallbackUrl(): string;
}
