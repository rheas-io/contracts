import { IResponse } from './response';
import { AnyObject } from './keyValue';

export interface IRedirector {
    /**
     * Redirects the request to home page
     *
     * @param params
     * @param status
     */
    home(params: AnyObject, status?: number): IResponse;

    /**
     * Redirects the request back to the previous url in the session
     *
     * @param status
     * @param fallback
     */
    back(status?: number, fallback?: string): IResponse;

    /**
     * Refreshes the request by reloading the request url
     *
     * @param status
     */
    refresh(status?: number): IResponse;

    /**
     * Redirects the request to the given path/url
     *
     * @param path
     * @param params
     * @param status
     */
    to(path: string, params?: AnyObject, status?: number): IResponse;

    /**
     * Redirects the request to a named route
     *
     * @param name
     * @param params
     * @param status
     */
    toRoute(name: string, params?: AnyObject, status?: number): IResponse;
}
