export interface IDriverManager<T> {
    /**
     * Registers a driver instance to the given name. If force is false
     * and an instance already exists for the key, then it won't be replaced.
     *
     * @param name
     * @param provider
     * @param force
     */
    registerDriver(name: string, provider: T, force: boolean): void;
    /**
     * Returns the driver instance for the name.
     *
     * @param name
     */
    getDriver(name: string): T;
}
