import { CipherGCMTypes } from 'crypto';

export interface IEncrypter {
    /**
     * Returns the key length of the given cipher.
     *
     * @param cipher
     */
    keyLength(cipher?: CipherGCMTypes): number;

    /**
     * Generates a key for the given cipher.
     *
     * @param cipher
     */
    generateKey(cipher?: CipherGCMTypes): Promise<string>;

    /**
     * Encrypts the given value and returns a base64 response of Json
     * encoded string containing iv, value and tag.
     *
     * @param value
     */
    encrypt(value: string): Promise<string>;

    /**
     * Decrypts the given encrypted value. Throws error if integrity fails, or
     * auth tag does not match.
     *
     * @param value
     */
    decrypt(value: string): string;
}
