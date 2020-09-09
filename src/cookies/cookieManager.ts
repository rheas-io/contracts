import { ICookie } from './cookie';
import { IManager } from '../core';

export interface ICookieManager extends IManager {
    /**
     * Checks if a cookie with the given name is queued for send.
     *
     * @param name
     */
    hasQueued(name: string): boolean;

    /**
     * Sets a cookie on the queue that has to be send along with
     * the response.
     *
     * @param cookie
     */
    queue(cookie: ICookie): ICookieManager;

    /**
     * Removes a cookie from the queue.
     *
     * @param name
     */
    unqueue(name: string): void;

    /**
     * Returns the incoming cookie value for the given key.
     *
     * @param name
     * @param defaultValue
     */
    incoming(name: string, defaultValue?: any): any;

    /**
     * Returns the queued cookie value for the given key.
     * 
     * @param name
     * @param defaultValue
     */
    queued(name: string, defaultValue?: any): any;
}
