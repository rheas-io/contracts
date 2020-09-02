import { ISession } from './session';
import { AnyObject } from '../core/keyValue';

export interface ISessionStore {
    /**
     * Saves the session on the store.
     *
     * @param session
     */
    save(session: ISession): Promise<boolean>;

    /**
     * Reads the session JSON data from the store. If the data is
     * encrypted, it will be decrypted. Data will be stored in the
     * base64 encoded format of { session:value, encryption:false, last_access:time }
     *
     * @param id
     *
     * @returns
     */
    read(id: string): Promise<ISession | null>;

    /**
     * Removes the session from the store
     *
     * @param id
     *
     * @return
     */
    remove(id: string): boolean;

    /**
     * Clears expired sessions in the store.
     *
     * @returns
     */
    clear(): boolean;

    /**
     * Encrypts the given session data
     *
     * @param session
     */
    encrypt(session: ISession): Promise<string>;

    /**
     * Decrypts the given session data into object.
     *
     * @param data
     */
    decrypt(data: string): AnyObject;

    /**
     * Set the session encryption option.
     *
     * @param encrypt
     */
    shouldEncrypt(encrypt: boolean): ISessionStore;
}
