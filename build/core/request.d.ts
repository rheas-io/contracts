/// <reference types="node" />
import { IncomingMessage } from "http";
export interface IRequest extends IncomingMessage {
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
