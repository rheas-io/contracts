import { AnyObject } from "../core/keyValue";

export interface ISession {

    /**
     * Returns the last accessed time of the session.
     * 
     * @returns 
     */
    lastAccessed(): number;

    /**
     * Updates the last accessed time of the session.
     * 
     * @returns
     */
    touch(): ISession;

    /**
     * Gets the session id if parameter is empty. Or, sets the parameter
     * as session id.
     * 
     * @returns 
     */
    id(id: string): string;

    /**
     * Gets the csrf token of the session if parameter is empty. Or,
     * sets the parameter as session token
     * 
     * @returns
     */
    csrf(token: string): string;

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