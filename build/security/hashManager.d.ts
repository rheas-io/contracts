import { IHasher } from "./hasher";
export interface IHashManager extends IHasher {
    /**
     * Returns the hash managers driver.
     *
     * @returns IHasher
     */
    getHasher(): IHasher;
    /**
     * Returns a new hasher instance of the algorithm.
     *
     * @param algo
     */
    getNewHasher(algo: string): IHasher;
}
