export interface IEncrypter {

    /**
     * Encrypts the given value and returns a hex response
     * of Json encoded string containing iv, value and tag
     * 
     * @param value 
     */
    encrypt(value: string | JSON): Promise<string>;

    /**
     * Decrypts the given encrypted value. Throws error if
     * integrity fails, auth tag does not match.
     * 
     * @param value 
     */
    decrypt(value: string): string | JSON;
}