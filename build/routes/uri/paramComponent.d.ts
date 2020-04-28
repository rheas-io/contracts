import { IUriComponent } from "./component";
export interface IParamComponent extends IUriComponent {
    /**
     * Flag to determine whether the UriComponent is optional
     * or not.
     *
     * @var boolean
     */
    optional: boolean;
    /**
     * Gets the name of the parameter from the component
     *
     * @param uriComponent
     */
    getName(uriComponent: IUriComponent): string;
}
