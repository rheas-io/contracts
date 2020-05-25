export interface IHasher {
    /**
     * Creates a pepper string for the hash algo.
     *
     * @returns string
     */
    createPepper(): string;
    /**
     * Creates a hash of the value
     *
     * @param value
     */
    createHash(value: string): Promise<string>;
    /**
     * Compares a normal text with hashed value for a match
     *
     * @param value
     * @param hashedValue
     */
    compare(value: string, hashedValue: string): Promise<boolean>;
}
