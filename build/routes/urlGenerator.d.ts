import { IRequest } from "../core/request";
import { StringObject } from "../core/keyValue";
export interface IUrlGenerator {
    /**
     * Creates an absolute url to the given path. Params are used to
     * replace params or append query string. By default all paths are
     * created as secure if no value is given.
     *
     * @param path
     * @param params
     * @param secure
     */
    to(path: string, params: StringObject, secure: boolean | null): string;
    /**
     * Returns the current requets url
     *
     * @param req
     */
    current(req: IRequest): string;
    /**
     * Returns the previous url.
     *
     * @param req
     */
    previous(req: IRequest, fallback: string): string;
    /**
     * Generates a full route url. Params are replaced with
     * the given argument list
     *
     * @param name
     * @param params
     */
    toRoute(name: string, params: StringObject): string;
}
