import { AnyObject } from '../core/keyValue';

export interface ISession {
    /**
     * Sets a new session id. If the given value is not a valid id, we will
     * create a new one.
     *
     * @param id
     */
    setId(id: string): ISession;

    /**
     * Sets the unix timestamp in ms at which the session
     * expires.
     *
     * @param timestamp
     */
    setExpiry(timestamp: number): ISession;

    /**
     * Sets a csrf token on the session.
     *
     * @returns
     */
    setCsrf(token: string): ISession;

    /**
     * Checks if the given token is a valid one that can be used
     * as session tokens.
     *
     * @param token
     */
    isValidToken(token: string): boolean;

    /**
     * Returns the session id.
     *
     * @returns
     */
    getId(): string;

    /**
     * Returns the session expiry time in epoch ms.
     *
     * @returns
     */
    getExpiry(): number;

    /**
     * Returns the CSRF token on the session.
     *
     * @returns
     */
    getCsrf(): string | null;

    /**
     * Gets a value stored in the session.
     *
     * @param key
     * @param defaultValue
     */
    get(key: string, defaultValue: any): any;

    /**
     * Sets a new value in the session.
     *
     * @param key
     * @param value
     */
    set(key: string, value: any): ISession;

    /**
     * Returns the complete session data.
     *
     * @returns
     */
    data(): AnyObject;
}
