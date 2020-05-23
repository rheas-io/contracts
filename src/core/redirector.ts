import { IResponse } from "./response";

export interface IRedirector {

    /**
     * Redirects the request to home page
     * 
     * @param status 
     */
    home(status?: number): IResponse;

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
     * @param status 
     */
    to(path: string, status?: number): IResponse;

    /**
     * Redirects the request to a named route
     * 
     * @param name 
     * @param status 
     */
    toRoute(name: string, status?: number): IResponse;
}