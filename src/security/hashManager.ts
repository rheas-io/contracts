import { IHasher } from "./hasher";

export interface IHashManager {

    /**
     * Returns the password hash driver.
     * 
     * @returns IHasher
     */
    getPasswordHasher(): IHasher;

    /**
     * Returns a new hasher instance of the algorithm.
     * 
     * @param algo 
     */
    getNewHasher(algo: string): IHasher;
}