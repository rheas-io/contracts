import { IRoutePipe } from "./routePipe";
import { IRequest } from "../core/request";
import { IResponse } from "../core/response";
export interface IRoutePipeHandler {
    /**
     * Request/Response pipe handler. The parameter next is a stack of
     * subsequent pipes/functions through which the request and response
     * has to pass through.
     *
     * @param req
     * @param res
     * @param next
     * @param params
     */
    (req: IRequest, res: IResponse, next: IRoutePipe, ...params: any): Promise<IResponse>;
}
