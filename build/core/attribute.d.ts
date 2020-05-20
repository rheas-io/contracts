export interface IAttributeManager {
    /**
     * Sets an attribute value.
     *
     * @param key
     * @param value
     */
    setAttribute(key: string, value: any): IAttributeManager;
    /**
     * Gets an attribute value if it exists or the defaultValue or null
     * if no default is given.
     *
     * @param key
     * @param defaultValue
     */
    getAttribute(key: string, defaultValue?: any): any;
}
