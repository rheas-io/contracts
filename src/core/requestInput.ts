import { IManager } from "./manager";
import { AnyObject } from "./keyValue";

export interface IRequestInput extends IManager {

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