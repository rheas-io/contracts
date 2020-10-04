import { IMiddleware } from './middleware';
import { IMiddlewareValues } from './middlewareMap';

export type INameParams = [string, string[]];

export interface IPipeResolver {
    (nameParams: INameParams): IMiddleware;
}

export interface IMiddlewareManager {
    /**
     * Registers a new middleware on the application for the given `name`.
     *
     * @param name
     * @param middleware
     */
    registerMiddleware(name: string, middleware: IMiddlewareValues): IMiddlewareManager;

    /**
     * Returns middleware string as name and params array.
     *
     * @param middleware
     */
    middlewareNameParams(middleware: string): INameParams;

    /**
     * Returns a list of middleware pipe for the given middleware name.
     *
     * @param nameParam
     */
    resolveMiddlewares([name, params]: INameParams): IMiddleware[];

    /**
     * Returns a collection of middleware functions from the middleware name.
     *
     * Middleware groups defined as array of handlers will return a collection of
     * middleware functions in the same order.
     *
     * If the handler for the `name` is a string or a function, an array with a single
     * middleware function will be returned.
     *
     * @param name
     */
    middlewaresFromName(name: string): IMiddleware[];

    /**
     * Returns a middleware function from the handler.
     *
     * If the `handler` is a function, it is considered as a middleware function and
     * is returned immediately.
     *
     * If the `handler` is a string ie middleware file path, we will try to return the
     * corresponding middleware function from the cache. If not found found, we will
     * load it, cache it and returns it. We will use the `default` export as middleware
     * function.
     *
     * @param handler
     */
    middlewareFromHandler(handler: string | IMiddleware): IMiddleware;

    /**
     * Returns the global middleware pipeline.
     *
     * All the request will go through this global middleware pipeline before
     * dispatching to the router.
     *
     * @returns
     */
    globalMiddlewares(): IMiddleware[];
}
