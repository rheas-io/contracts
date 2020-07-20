import { IAttributeManager } from "./attribute";
export interface IRequestContent extends IAttributeManager {
    /**
     * Returns true if the request is an AJAX request.
     *
     * @returns
     */
    ajax(): boolean;
    /**
     * Returns true if the request is a PJAX request.
     *
     * @returns
     */
    pjax(): boolean;
    /**
     * Returns true if the request accepts the given type.
     *
     * @param type
     */
    accepts(type: string): boolean;
    /**
     * Returns true if the request needs Json response.
     *
     * @return boolean
     */
    acceptsJson(): boolean;
    /**
     * Returns true if the request is specifically asking
     * for json response.
     *
     * @returns
     */
    wantsJson(): boolean;
    /**
     * Returns true if the request accepts any content type
     *
     * @returns
     */
    acceptsAnyType(): boolean;
    /**
     * Returns the acceptable content types in the quality order.
     * Most preferred are returned first.
     *
     * @returns
     */
    acceptableContentTypes(): string[];
    /**
     * Returns true if the request is json type.
     *
     * @return boolean
     */
    isJson(): boolean;
    /**
     * Sets the format that has to be used to send response.
     *
     * @param format
     */
    setFormat(format: string): IRequestContent;
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
