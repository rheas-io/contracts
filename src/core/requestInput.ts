import { AnyObject } from "./keyValue";

export interface IRequestInput {

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
     * Adds the parameter elements to the request inputs.
     * 
     * @param input 
     */
    merge(input: AnyObject): IRequestInput;

}