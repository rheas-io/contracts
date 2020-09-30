import { IRoute } from './route';
import { IRouteBase } from './routeBase';

export interface IRouteGroup extends IRouteBase<IRouteGroup> {
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
    routes(...routes: (IRoute | IRouteGroup)[]): IRouteGroup;

    /**
     * Returns all the routes with group properties prepended to it.
     *
     * @returns
     */
    getRoutes(parent?: IRouteGroup): IRoute[];
}
