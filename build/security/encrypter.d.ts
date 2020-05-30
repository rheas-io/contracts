export interface IEncrypter {
    /**
     * Encrypts the value
     *
     * @param value
     */
    encrypt(value: string | JSON): string;
    /**
     * Decrypts a value
     *
     * @param value
     */
    decrypt(value: string): string | JSON;
}
