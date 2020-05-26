import { IHasher } from "./hasher";

export interface IHashManager extends IHasher {

    /**
     * Creates a pepper string for the hash algo.
     * 
     * @returns string
     */
    createPepper(): Promise<string>;

    /**
     * Returns the hash driver to use.
     * 
     * @returns IHasher
     */
    getHasher(): IHasher;
}