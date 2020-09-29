import { IMiddleware } from './middleware';

export type INameParams = [string, string[]];

export interface IPipeResolver {
    (nameParams: INameParams): IMiddleware;
}

export interface IMiddlewareManager {
    /**
     * Returns middleware string as name and params array.
     *
     * @param middleware
     */
    middlewareNameParams(middleware: string): INameParams;

    /**
     * Returns middleware handler function.
     *
     * @param nameParam
     */
    resolveMiddleware([name, params]: INameParams): IMiddleware;
}
