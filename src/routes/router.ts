import { IRoute } from './route';
import { IRequest } from '../core/request';
import { IRouteGroup } from './routeGroup';
import { IResponse } from '../core/response';
import { IMiddleware, INameParams } from '../middlewares';

export interface IRouter {
    /**
     * Requests are send here after flowing through a series of global middlewares
     * in the request kernal.
     *
     * This handler finds a matching route for the request and continue the request
     * flow through the route middleware pipeline.
     *
     * Exceptions are thrown if a matchiing route is not found and/or when there are
     * some error processing the request. All the exceptions have to be caught in the
     * request kernal.
     *
     * @param request
     * @param response
     * @throws
     */
    handle(request: IRequest, response: IResponse): Promise<IResponse>;

    /**
     * Dispatches the request to the route through middleware pipeline.
     *
     * This function creates a new pipeline with route action as the destination.
     * This pipeline consists of the route middlewares. The request reaches the route
     * action aka pipeline destination after flowing through all the route middlewares.
     *
     * @param route
     * @param req
     * @param res
     */
    dispatchToRoute(route: IRoute, req: IRequest, res: IResponse): Promise<IResponse>;

    /**
     * Resolves middleware handlers for the route. Returns an array of middleware
     * handlers which executes the corresponding middleware with the params.
     *
     * @param route
     */
    middlewarePipesOfRoute(route: IRoute): IMiddleware[];

    /**
     * Checks if the given middleware (by name) has to be executed or not. Returns
     * [name, params[]] if the middleware is not present in the exclusion list of route.
     *
     * @param route
     * @param middleware
     */
    routeRequiresMiddleware(route: IRoute, middleware: string): INameParams | false;

    /**
     * Returns path to the script. The path is respective to the root
     * path.
     *
     * @param filename
     */
    controllerAbsolutePath(filename: string): string;

    /**
     * Checks the request for a matching route.
     *
     * @param request
     * @param response
     */
    matchingRoute(request: IRequest): IRoute;

    /**
     * Registers a list of routes on this router. The routes are registered
     * in the same order as the order in which it is defined.
     *
     * @param routes
     */
    registerRoutes(...routes: (IRoute | IRouteGroup)[]): IRouter;

    /**
     * Adds a route to the end of the routes list.
     *
     * @param route
     */
    registerRoute(route: IRoute): IRouter;

    /**
     * Caches the route into different categories like named routes, route
     * of different methods etc.
     */
    cacheRoutes(): void;

    /**
     * Returns true if the router is cached.
     *
     * Application router is cached after all the services have booted.
     *
     * @returns
     */
    cached(): boolean;

    /**
     * Returns a route with the given name. Comes in handy to create Url's of
     * route.
     *
     * @param name
     */
    getNamedRoute(name: string): IRoute | null;
}
