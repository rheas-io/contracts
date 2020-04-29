import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
export interface IException {
    /**
     * Name of this error
     *
     * @var string
     */
    name: string;
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
     * Binds the exception to the response.
     *
     * @param response
     * @param request
     */
    bindToResponse(response: IResponse, request?: IRequest): IResponse;
    /**
     * Returns an error object that can be send as response body.
     * This object contains name, message, status and optionally the stack trace
     * if app is in debug mode.
     *
     * @returns object
     */
    getErrorObject(): object;
    /**
     * Returns the stack trace in a string array, which can be either
     * send along with a json response (on debug) or can be used to
     * write to a log file.
     *
     * @returns array
     */
    getPrintableTrace(): string[];
}
