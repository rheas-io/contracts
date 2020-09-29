export interface IRouteBase {
    /**
     * Sets the domian of this route
     *
     * @param domain
     */
    domain(domain: string): IRouteBase;

    /**
     * Sets the route to allow http requests.
     *
     * @return this
     */
    http(httpRoute?: boolean): IRouteBase;

    /**
     * Sets the middlewares to be used by this route or route group.
     *
     * @param middlewares
     */
    middleware(...middlewares: string[]): IRouteBase;

    /**
     * Sets the excluded middlewares of this route.
     *
     * @param middlewares
     */
    withoutMiddleware(...middlewares: string[]): IRouteBase;

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
