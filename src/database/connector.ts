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
     * Creates a new connection mapped to the given name. If no uri is given,
     * the uri created from the database config data is used. Returns the new
     * connection.
     *
     * Throws exception if connection was not made.
     *
     * @param name
     * @param uri
     *
     * @throws
     */
    createConnection(name: string, uri?: string): Promise<T>;

    /**
     * Returns a connection mapped to the given name. If no name is given
     * the default connection is returned.
     *
     * Throws exception if a connection for the name is not registered.
     *
     * @param name
     *
     * @returns
     * @throws
     */
    connection(name?: string): T;

    /**
     * Closes all the database connections. Returns a promise of all connection close
     * requests.
     *
     * @returns
     */
    closeConnections(): Promise<void[]>;
}
