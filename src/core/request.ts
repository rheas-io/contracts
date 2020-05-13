import { IncomingMessage } from "http";
import { IUriComponent } from "../routes/uri";

export interface IRequest extends IncomingMessage {

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
    getPathComponents(): IUriComponent[];

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
     * Returns true if the request needs Json response.
     * 
     * @return boolean
     */
    acceptsJson(): boolean;
}