import { IResponse } from "./response";

export interface IRedirector {

    /**
     * Returns the response associated with redirector
     * 
     * @returns IResponse
     */
    response(): IResponse;
}