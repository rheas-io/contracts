/// <reference types="node" />
import { IncomingMessage } from "http";
import { IResponse } from "./response";
import { AnyObject } from "./keyValue";
import { IContainer } from "../container";
import { IRedirector } from "./redirector";
import { IAttributeManager } from "./attribute";
import { IRequestComponent } from "../routes/uri";
export interface IRequest extends IncomingMessage, IContainer, IAttributeManager {
    /**
     * Boots the request with services and containers.
     *
     * @param response
     */
    boot(response: IResponse): IRequest;
    /**
     * Returns the value of request input/data/file
     *
     * @param key
     */
    input(key?: string): any;
    /**
     * Returns all the request inputs as key value object
     *
     * @returns object
     */
    all(): AnyObject;
    /**
     * Returns the request redirector service.
     *
     * @returns IRedirector
     */
    redirect(): IRedirector;
    /**
     * Sets the format that has to be used to send response.
     *
     * @param format
     */
    setFormat(format: string): IRequest;
    /**
     * Adds the parameter elements to the request inputs.
     *
     * @param input
     */
    merge(input: AnyObject): IRequest;
    /**
     * Returns the params of this request as an array in the
     * same order.
     *
     * @returns array
     */
    params(): string[];
    /**
     * Checks if the request came through a secure channel
     *
     * @return boolean
     */
    isSecure(): boolean;
    /**
     * Returns true if the request needs Json response.
     *
     * @return boolean
     */
    acceptsJson(): boolean;
    /**
     * Returns true if the request is json type.
     *
     * @return boolean
     */
    isJson(): boolean;
    /**
     * Gets the request schema https/http
     *
     * @return string
     */
    getSchema(): string;
    /**
     * Gets the request hostname
     *
     * @return string
     */
    getHost(): string;
    /**
     * Gets the request path respective to the root/host
     *
     * @return string
     */
    getPath(): string;
    /**
     * Returns the request path segments generated by splitting
     * the path using forward slash (/)
     *
     * @return array
     */
    getPathComponents(): IRequestComponent[];
    /**
     * Returns the full url of the request including scheme, host,
     * path and query string.
     *
     * @return string
     */
    getFullUrl(): string;
    /**
     * Returns the query string without the leading ?
     *
     * @return string
     */
    getQueryString(): string;
    /**
     * Returns the request method after reading the headers
     * and _method fields
     *
     * @return string
     */
    getMethod(): string;
    /**
     * Returns the actual method
     *
     * @return string
     */
    getRealMethod(): string;
    /**
     * Gets the request format set by the application.
     *
     * @param defaulValue
     * @returns string
     */
    getFormat(defaulValue?: string): string;
    /**
     * Returns the mimetype of the format. null if no mime found.
     *
     * @param format
     * @returns string
     */
    getMimeType(format: string): string | null;
}
