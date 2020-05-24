export interface IHasher {

    /**
     * 
     * @param value 
     */
    createHash(value: string): string;

    /**
     * 
     * @param value 
     * @param hashedValue 
     */
    compare(value: string, hashedValue: string): boolean;
}