import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
import { StringObject, AnyObject } from "../core/keyValue";

export interface IOauthProvider {

    /**
     * Authorization request controller. Redirects the requests to the
     * provider url where users are asked for account access permissions.
     * 
     * @param req 
     * @param res 
     */
    onAuthorizeRequested(req: IRequest, res: IResponse): Promise<IResponse>;

    /**
     * Authorization response controller. Oauth provider redirects the auth request
     * to this controller function. This function has to read the response code and
     * return an accessToken from the provider.
     * 
     * @param req 
     * @param res 
     */
    onAuthorizeResponded(req: IRequest, res: IResponse): Promise<AnyObject>;

    /**
     * Returns the authorization request url including the query part
     * containing state, scope, client_id etc
     * 
     * @returns string
     */
    getAuthorizationRequestUrl(): string;

    /**
     * Returns the auth query params. Override this method to add or
     * change the authorization queries.
     * 
     * @returns object
     */
    getAuthorizationParams(): StringObject;

    /**
    * Adds a new authorization scope on the provider.
    * 
    * @param scope 
    */
    addScope(scope: string): IOauthProvider;

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

    /**
     * Returns the user auth scope/permissions as an array
     * 
     * @returns array
     */
    getScope(): string[];
}