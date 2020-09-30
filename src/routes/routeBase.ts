export interface IRouteBase<T extends IRouteBase<T>> {
    /**
     * Sets the domian of this route
     *
     * @param domain
     */
    domain(domain: string): T;

    /**
     * Sets the route to allow http requests.
     *
     * @return this
     */
    http(httpRoute?: boolean): T;

    /**
     * Sets the middlewares to be used by this route or route group.
     *
     * @param middlewares
     */
    middleware(...middlewares: string[]): T;

    /**
     * Sets the excluded middlewares of this route.
     *
     * @param middlewares
     */
    withoutMiddleware(...middlewares: string[]): T;

    /**
     * Returns the domain of this route/group.
     *
     * @returns
     */
    getDomain(): string;

    /**
     * Returns true if the route accepts http conenction.
     *
     * @returns
     */
    isHttpRoute(): boolean;

    /**
     * Returns all the route middlewares.
     *
     * @returns
     */
    getMiddlewares(): string[];

    /**
     * Returns all the excluded middlewares.
     *
     * @returns
     */
    excludedMiddlewares(): Set<string>;
}
