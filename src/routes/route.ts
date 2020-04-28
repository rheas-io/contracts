import { IRequest } from "../core/request";

export interface IRoute {

    matches(request: IRequest): boolean;

    routes(...routes: IRoute[]): IRoute;

    routeMiddlewares(): string[];

    routePath(): string;

    name(name: string): IRoute;

    prefix(name: string): IRoute;

    domain(domain: string): IRoute;

    middleware(middlewares: string | string[]): IRoute;

    setParent(route: IRoute): void;

    getName(): string;

    getPath(): string;

    getDomain(): string;

    getParent(): IRoute | null;

    hasParent(): boolean;
}