import { IRoute } from "./route";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
import { IRouteRegistrar } from "./routeRegistrar";
export declare type INameParam = [string, string[]];
export interface IRouter extends IRouteRegistrar {
    cacheRoutes(): void;
    processRequest(request: IRequest, response: IResponse): Promise<IResponse>;
    matchingRoute(request: IRequest): IRoute;
    addRegistrar(name: string, registrar: IRouteRegistrar): void;
    deleteRegistrar(name: string): void;
}
