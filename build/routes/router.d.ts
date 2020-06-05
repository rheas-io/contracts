import { IRoute } from "./route";
import { IMiddleware } from "./middleware";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
import { IRouteRegistrar } from "./routeRegistrar";
export declare type INameParams = [string, string[]];
export interface IPipeResolver {
    (nameParams: INameParams): IMiddleware;
}
export interface IRouter extends IRouteRegistrar {
    handle(request: IRequest, response: IResponse): Promise<IResponse>;
    matchingRoute(request: IRequest): IRoute;
    getNamedRoute(name: string): IRoute | null;
    cacheRoutes(): void;
    addRegistrar(name: string, registrar: IRouteRegistrar): void;
    deleteRegistrar(name: string): void;
}
