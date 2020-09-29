import { IRequest } from './request';
import { IResponse } from './response';
import { IException } from '../errors';

export interface IKernal {
    /**
     * Application requests are send here for processing. The request is initially
     * sent to a pipeline of global middlewares (middlewares of this class). Once that's
     * done, they are forwarded to routeHandler, which checks for a matching route. If found
     * one, then the request is send through a pipeline of route middlewares.
     *
     * @param request
     * @param response
     */
    handle(request: IRequest, response: IResponse): Promise<IResponse>;

    /**
     * Try to serve a static file for the given request.
     *
     * If no file exists for the request, then false is returned.
     *
     * @param request
     * @param response
     */
    serveFile(request: IRequest, response: IResponse): Promise<IResponse | false>;

    /**
     * Checks if a static file exits for the request.
     *
     * Returns the filePath if a static file exists for the request path or returns
     * false.
     *
     * @param request
     */
    staticFileExistsForRequest(request: IRequest): Promise<string | false>;

    /**
     * Returns an error response from the error. Exception handler converts the
     * exception and exception trace into a Json format suitable for sending as
     * response.
     *
     * @param err
     * @param req
     * @param res
     */
    responseFromError(err: Error | IException, req: IRequest, res: IResponse): IResponse;
}
