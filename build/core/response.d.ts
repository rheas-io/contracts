/// <reference types="node" />
import { ServerResponse } from "http";
import { AnyObject } from "./keyValue";
export interface IResponse extends ServerResponse {
    /**
     * Sends the response and ends the stream. This completes
     * a request cycle.
     *
     * @returns IResponse
     */
    send(): IResponse;
    /**
     * Alias of setContent.
     *
     * @param content
     */
    set(content: any): IResponse;
    /**
     * Sets a JSON content
     *
     * @param content
     */
    json(content: AnyObject): IResponse;
    /**
     * Sets the response content/body that has to be send.
     *
     * @param content
     * @returns IResponse
     */
    setContent(content: any): IResponse;
    /**
     * Sets an empty string as content and removes all the headers
     * related to content.
     *
     * @returns IResponse
     */
    setEmptyContent(): IResponse;
    /**
     * Sets status as 304 and removes content and headers that are not
     * needed in a non-modified response.
     *
     * @returns IResponse
     */
    setNotModified(): IResponse;
    /**
     * Prepares the response with necessary headers and status
     * code.
     *
     * @returns IResponse
     */
    prepareResponse(): IResponse;
    /**
     * Returns the headers that are not needed in Not-Modified
     * responses.
     *
     * @return array
     */
    headersNotNeededInNotModified(): string[];
    /**
     * Checks if the status given is a redirect status or not.
     *
     * @returns boolean
     */
    isRedirectStatus(status: number): boolean;
    /**
     * Checks if the response is informational or not. 100<status_code<200
     *
     * @return boolean
     */
    hasInformationalStatus(): boolean;
    /**
     * Checks if the response is empty ie 204-No Content or 304-Not Modified
     *
     * @returns boolean
     */
    hasEmptyStatus(): boolean;
}
