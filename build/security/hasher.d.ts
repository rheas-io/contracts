export interface IHasher {
    /**
     * Creates a hash of the value
     *
     * @param value
     */
    createHash(value: string): Promise<string> | string;
    /**
     * Compares a normal text with hashed value for a match
     *
     * @param value
     * @param hashedValue
     */
    compare(value: string, hashedValue: string): Promise<boolean> | boolean;
    /**
     * Performs time safe comparison of two hashes
     *
     * @param hashedValue
     * @param preHashedValue
     */
    compareHashes(hashedValue: string, preHashedValue: string): Promise<boolean> | boolean;
}
