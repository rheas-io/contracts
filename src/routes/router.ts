import { IRoute } from "./route";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
import { IRouteRegistrar } from "./routeRegistrar";
import { IMiddleware } from "./middleware";

export type INameParams = [string, string[]];

export interface IPipeResolver {
    (nameParams: INameParams): IMiddleware;
}

export interface IRouter extends IRouteRegistrar {

    cacheRoutes(): void;

    handle(request: IRequest, response: IResponse): Promise<IResponse>;

    matchingRoute(request: IRequest): IRoute;

    addRegistrar(name: string, registrar: IRouteRegistrar): void;

    deleteRegistrar(name: string): void;
}