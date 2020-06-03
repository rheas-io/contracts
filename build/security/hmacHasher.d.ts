import { IHasher } from "./hasher";
export interface IHmacHasher extends IHasher {
    /**
     * Creates a new hmac hash using the key property of the
     * class.
     *
     * @param value
     */
    createHmacHash(value: string): Promise<string> | string;
    /**
     * Performs HMAC hash comparison.
     *
     * @param value
     * @param hashedValue
     */
    compareHmacHash(value: string, hashedValue: string): Promise<boolean> | boolean;
    /**
     * Performs time safe comparison of two hashes
     *
     * @param hashedValue
     * @param preHashedValue
     */
    compareHashes(hashedValue: string, preHashedValue: string): Promise<boolean> | boolean;
}
