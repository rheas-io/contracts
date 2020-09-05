import { ICookie } from './cookie';

export interface ICookieManager {
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
}
