export interface IDbConnector<T> {
    /**
     * Connects to the database and returns a connection on success.
     *
     * Throws an exception when database connection fails.
     *
     * @returns
     * @throws
     */
    connect(): Promise<T>;

    /**
     * Returns an active database connection. If no connection is found, the
     * function attempts to create one.
     *
     * Throws exception if connection was not made.
     *
     * @returns
     * @throws
     */
    connection(): Promise<T>;

    /**
     * Closes all the database connections. Returns a promise of all connection close
     * requests.
     *
     * @returns
     */
    closeConnections(): Promise<void[]>;
}
