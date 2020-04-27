import { IRouteRegistrar } from "./routeRegistrar";

export interface IRouter extends IRouteRegistrar {

    cacheRoutes(): void;

    addRegistrar(name: string, registrar: IRouteRegistrar): void;

    deleteRegistrar(name: string): void;
}