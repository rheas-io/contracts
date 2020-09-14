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
     * Sets a default driver key/name, if one is already registered. Or throws
     * an exception.
     *
     * If a second argument is given, then the driver will be registered first.
     *
     * @param name
     * @param driver
     */
    setDefaultDriver(name: string, driver?: T): void;

    /**
     * Returns the default driver, if one exists or returns false.
     *
     * @returns
     */
    defaultDriver(): T | false;

    /**
     * Returns the driver instance for the name or the default driver if
     * no name is provided. An exception is thrown if no driver could
     * be found.
     *
     * @param name
     */
    getDriver(name?: string): T;
}
