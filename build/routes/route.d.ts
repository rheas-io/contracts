import { IUriComponent } from "./uri";
import { IRequestHandler } from "./requestHandler";
export interface IRoute {
    routes(...routes: IRoute[]): IRoute;
    routeMiddlewares(): string[];
    routePath(): string;
    routeDomain(): string;
    routeSecure(): boolean;
    routeEndpoints(): IRoute[];
    methods(methods: string | string[]): IRoute;
    action(action: string | IRequestHandler): IRoute;
    name(name: string): IRoute;
    prefix(name: string): IRoute;
    domain(domain: string): IRoute;
    middleware(middlewares: string | string[]): IRoute;
    withoutMiddleware(middlewares: string | string[]): IRoute;
    secure(): IRoute;
    setParent(route: IRoute): void;
    getMethods(): string[];
    getName(): string;
    getPath(): string;
    getAction(): string | IRequestHandler;
    getParent(): IRoute | null;
    getUriComponents(): IUriComponent[];
    getExcludedMiddlewares(): string[];
    isEndpoint(): boolean;
    hasParent(): boolean;
}
