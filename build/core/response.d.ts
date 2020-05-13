/// <reference types="node" />
import { ServerResponse } from "http";
export interface IResponse extends ServerResponse {
    /**
     * Creates a redirect response.
     *
     * @param to
     * @param status
     */
    redirect(to: string, status: number): IResponse;
}
