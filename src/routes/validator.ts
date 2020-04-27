import { IRoute } from "./route";
import { IRequest } from "../core/request";

export interface IRouteValidator {
    matches(route: IRoute, request: IRequest): boolean;
}