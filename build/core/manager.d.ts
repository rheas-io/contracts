export interface IManager {
    /**
     * Returns the binding stored in this container.
     *
     * @param key
     * @param defaultValue
     */
    get(key: string, defaultValue?: any): any;
}
