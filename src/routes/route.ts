import { IUriComponent } from "./uri";

export interface IRoute {

    routes(...routes: IRoute[]): IRoute;

    routeMiddlewares(): string[];

    routePath(): string;

    routeDomain(): string;

    name(name: string): IRoute;

    prefix(name: string): IRoute;

    domain(domain: string): IRoute;

    middleware(middlewares: string | string[]): IRoute;

    setParent(route: IRoute): void;

    getName(): string;

    getPath(): string;

    getParent(): IRoute | null;

    getUriComponents(): IUriComponent[];

    hasParent(): boolean;
}