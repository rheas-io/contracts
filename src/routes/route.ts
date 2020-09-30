import { IUriComponent } from './uri';
import { IRouteBase } from './routeBase';
import { IRouteGroup } from './routeGroup';
import { IRequestHandler } from './requestHandler';

export interface IRoute extends IRouteBase<IRoute> {
    /**
     * Sets the name of the route
     *
     * @param name
     */
    name(name: string): IRoute;

    /**
     * Sets the HTTP methods supported by this route.
     *
     * @param methods
     */
    methods(methods: string | string[]): IRoute;

    /**
     * Sets the controller action to be performed by this route.
     *
     * @param action
     */
    action(action: string | IRequestHandler): IRoute;

    /**
     * Sets the group properties on the route like setting perfixes, prepending
     * middlewares, updating excluded middlewares etc.
     *
     * @param group
     */
    setGroupProperties(group: IRouteGroup): IRoute;

    /**
     * Returns the name of the route.
     *
     * @returns
     */
    getName(): string;

    /**
     * Returns the path to which the route is assigned.
     *
     * @returns
     */
    getPath(): string;

    /**
     * Returns the HTTP methods supported by the route.
     *
     * @returns
     */
    getMethods(): string[];

    /**
     * Returns the action to be performed when a request matches the
     * route.
     *
     * @returns
     */
    getAction(): string | IRequestHandler;

    /**
     * Returns the uri components of this route ie route path is split by `/`
     * and returns each segment as a UriComponent object.
     *
     * @returns
     */
    getUriComponents(): IUriComponent[];
}
