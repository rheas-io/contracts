import { ISession } from "./session";

export interface ISessionStore {

    /**
     * Reads the session JSON data from the store. If the data is
     * encrypted, it will be decrypted. Data will be stored in the
     * base64 encoded format of { session:value, encryption:false, last_access:time }
     *  
     * @param id
     * 
     * @returns 
     */
    read(id: string): ISession | null;

    /**
     * Removes the session from the store
     * 
     * @param id
     * 
     * @return
     */
    remove(id: string): boolean;

    /**
     * Saves the session on the store.
     * 
     * @param session 
     */
    save(session: ISession): boolean;

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
    encrypt(session: ISession): string;

    /**
     * Decrypts the given session data into JSON.
     * 
     * @param data 
     */
    decrypt(data: string): JSON;

    /**
     * Set the session encryption option.
     * 
     * @param encrypt 
     */
    shouldEncrypt(encrypt: boolean): ISessionStore;
}