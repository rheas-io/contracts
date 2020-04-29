import { IUriComponent } from "./uri";
export interface IRoute {
    routes(...routes: IRoute[]): IRoute;
    routeMiddlewares(): string[];
    routePath(): string;
    routeDomain(): string;
    routeSecureOnly(): boolean;
    methods(methods: string | string[]): IRoute;
    action(action: string): IRoute;
    name(name: string): IRoute;
    prefix(name: string): IRoute;
    domain(domain: string): IRoute;
    middleware(middlewares: string | string[]): IRoute;
    secureOnly(): IRoute;
    setParent(route: IRoute): void;
    getMethods(): string[];
    getName(): string;
    getPath(): string;
    getParent(): IRoute | null;
    getUriComponents(): IUriComponent[];
    hasParent(): boolean;
}
