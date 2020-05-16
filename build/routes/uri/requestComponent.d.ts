import { IUriComponent } from "./component";
import { StringObject } from "../../core/keyValue";
export interface IRequestComponent extends IUriComponent {
    /**
     * Sets the route component matching with this component.
     *
     * @param status
     */
    setComponent(component: IUriComponent): IRequestComponent;
    /**
     * Returns the paramter flag of this component. True if this
     * is a parameter component.
     *
     * @returns boolean
     */
    isParam(): boolean;
    /**
     * Returns the parameter as an object.
     *
     * @returns object
     */
    getParam(): StringObject;
}
