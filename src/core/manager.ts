export interface IManager {
    /**
     * Returns the binding stored in this container.
     * 
     * @param key 
     * @param defaultValue 
     */
    get<T>(key: string, defaultValue?: T | null): T | null;
}