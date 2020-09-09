export interface IDriverManager<T> {
    /**
     * Registers a driver instance to the given name. If force is false
     * and an instance already exists for the key, then it won't be replaced.
     *
     * @param name
     * @param driver
     * @param force
     */
    registerDriver(name: string, driver: T, force: boolean): void;

    /**
     * Sets an active driver key/name, if one is already registered. Or throws
     * an exception.
     *
     * If a second argument is given, then the driver will be registered first.
     *
     * @param name
     * @param driver
     */
    setActiveDriver(name: string, driver?: T): void;

    /**
     * Returns the active driver, if one exists or returns false.
     * This comes handy to check if an active driver is set or not.
     *
     * @returns
     */
    hasActiveDriver(): T | false;

    /**
     * Returns the driver instance for the name or the active driver if
     * no name is provided. An exception is thrown if no driver could
     * be found.
     *
     * @param name
     */
    getDriver(name?: string): T;
}
