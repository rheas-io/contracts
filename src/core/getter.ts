export interface IGetter {
    /**
     * Returns the binding stored in this contract.
     *
     * @param key
     * @param defaultValue
     */
    get(key: string, defaultValue?: any): any;
}
