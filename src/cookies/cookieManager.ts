import { ICookie } from './cookie';
import { IGetter } from '../core/getter';
import { KeyValue } from '../core/keyValue';

export interface ICookieManager extends IGetter {
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
     */
    incoming(name: string): ICookie | null;

    /**
     * Returns the queued cookie value for the given key.
     *
     * @param name
     */
    queued(name: string): ICookie | null;

    /**
     * Returns all the parsed incoming cookies.
     *
     * @returns
     */
    incomingCookies(): KeyValue<ICookie>;

    /**
     * Returns all the queued cookies.
     *
     * @returns
     */
    queuedCookies(): KeyValue<ICookie>;
}
