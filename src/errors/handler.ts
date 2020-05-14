import { IException } from "./exception";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";

export interface IExceptionHandler {

    /**
     * Prepares a rheas exception from the error if it is not 
     * already one.
     * 
     * @param err 
     */
    prepareException(err: Error | IException): IException;

    /**
     * Binds the exception to the response. Status code, message, body
     * of the response are updated in according to the exception and returns
     * the response.
     * 
     * @param err 
     * @param req 
     * @param res 
     */
    responseFromError(err: IException, req: IRequest, res: IResponse): IResponse;
}