import { IResponse } from '../core/response';
import { IRequest } from '../core/request';

export interface IException {
    /**
     * Message for this exception
     *
     * @var string
     */
    message: string;

    /**
     * Stack trace of this error
     *
     * @var string
     */
    stack: string;

    /**
     * HTTP response status code
     *
     * @var number
     */
    status: number;

    /**
     * Sets the given error as this exceptions error/stack.
     *
     * @param err
     */
    setException(err: Error): IException;

    /**
     * Binds the exception status code and headers to the response.
     *
     * @param response
     * @param request
     * @param app
     */
    bindToResponse(response: IResponse): IResponse;

    /**
     * Sets the error object on response body. This object contains error message, status and
     * optionally the stack trace if the app is in debug mode.
     *
     * @param req
     * @param res
     *
     * @returns object
     */
    jsonResponse(req: IRequest, res: IResponse): IResponse;

    /**
     * The handler that sets a redirect/view response for the exception.
     *
     * @param req
     * @param res
     */
    renderResponse(req: IRequest, res: IResponse): IResponse;

    /**
     * Returns the stack trace in a string array, which can be either
     * send along with a json response (on debug) or can be used to
     * write to a log file.
     *
     * @returns array
     */
    getPrintableTrace(): string[];
}
