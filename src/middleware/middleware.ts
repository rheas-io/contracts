import { IRequest } from "../core/request";
import { IResponse } from "../core/response";

export interface IMiddleware {
    handle(request: IRequest, response: IResponse, next: IMiddleware, ...params: any): IResponse;
}