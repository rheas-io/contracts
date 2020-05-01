import { IRoute } from "./route";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
import { IRouteRegistrar } from "./routeRegistrar";
export interface IRouter extends IRouteRegistrar {
    cacheRoutes(): void;
    processRequest(request: IRequest, response: IResponse): void;
    matchingRoute(request: IRequest, response: IResponse): IRoute;
    dispatchToRoute(route: IRoute, request: IRequest, response: IResponse): IResponse;
    addRegistrar(name: string, registrar: IRouteRegistrar): void;
    deleteRegistrar(name: string): void;
}
