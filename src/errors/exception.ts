export interface IException {
    /**
     * Name of this error
     * 
     * @var string
     */
    name: string;

    /**
     * Message for this exception
     * 
     * @var string
     */
    message: string;

    /**
     * Stack trace of this error
     * 
     * @var string
     */
    stack: string;

    /**
     * HTTP response status code
     * 
     * @var number
     */
    status: number;

    /**
     * Returns the exception as a json object
     */
    getErrors(): object;
}