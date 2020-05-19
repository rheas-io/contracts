export interface IManager {
    /**
     * Returns the binding stored in this container.
     *
     * @param key
     */
    get(key: string): any;
}
