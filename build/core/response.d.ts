/// <reference types="node" />
import { IRequest } from "./request";
import { ServerResponse } from "http";
export interface IResponse extends ServerResponse {
    /**
     * Sends the response and ends the stream. This completes
     * a request cycle.
     */
    send(): void;
    /**
     * Sets the response content/body that has to be send.
     *
     * @param content
     */
    setContent(content: any): IResponse;
    /**
     * Prepares the response with necessary headers and status
     * code.
     *
     * @param request
     */
    prepareResponse(request: IRequest): IResponse;
    /**
     * Creates a redirect response.
     *
     * @param to
     * @param status
     */
    redirect(to: string, status?: number): IResponse;
}
