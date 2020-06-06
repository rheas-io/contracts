import { IUriComponent } from "./component";

export interface IParamComponent extends IUriComponent {

    /**
     * Returns true if the param is optional.
     * 
     * @returns boolean
     */
    isOptional(): boolean;

    /**
     * Returns the name of the parameter without any optional
     * symbol (?) or colon (:)
     * 
     * @returns param name
     */
    getName(): string
}