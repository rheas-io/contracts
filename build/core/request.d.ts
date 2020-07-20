/// <reference types="node" />
import { IncomingMessage } from "http";
import { IContainer } from "../container";
import { IRedirector } from "./redirector";
import { IRequestComponent } from "../routes/uri";
import { IRequestContent } from "./requestContent";
import { IRequestInput } from "./requestInput";
import { AnyObject } from "./keyValue";
export interface IRequest extends IncomingMessage, IContainer {
    /**
     * Boots the request with services and containers.
     *
     * @returns IRequest
     */
    boot(): IRequest;
    /**
     * Returns the request redirector service.
     *
     * @returns IRedirector
     */
    redirect(): IRedirector;
    /**
     * Returns the request content manager. Responsible for anything
     * related to content-types, formats, mime-types etc.
     *
     * @returns
     */
    contents(): IRequestContent;
    /**
     * Returns the request inputs manager. Manages all the input fields
     * of a request.
     *
     * @returns
     */
    inputs(): IRequestInput;
    /**
     * Returns the request body contents as an object.
     *
     * @returns
     */
    body(): AnyObject;
    /**
     * Returns the uploaded files with form_name as the key.
     *
     * @var AnyObject
     */
    files(): AnyObject;
    /**
     * Returns the query objects.
     *
     * @returns
     */
    query(): AnyObject;
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
}
