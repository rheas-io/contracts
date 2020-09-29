import { IRoute } from './route';
import { IRouteBase } from './routeBase';

export interface IRouteGroup extends IRouteBase {
    /**
     * Sets the route group prefix
     *
     * @param prefix
     */
    prefix(prefix: string): IRouteGroup;

    /**
     * Returns the group prefix.
     *
     * @returns
     */
    getPrefix(): string;

    /**
     * Routes in this route group.
     *
     * @param routes
     */
    routes(routes: Array<IRoute | IRouteGroup>): this;

    /**
     * Returns all the routes with group properties prepended to it.
     *
     * @returns
     */
    getRoutes(parent?: IRouteGroup): IRoute[];
}
