import { IUriComponent } from './component';

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
     * Returns the parameter name from the route component.
     *
     * @returns string
     */
    getParamName(): string;

    /**
     * Returns the parameter value.
     *
     * @returns string
     */
    getParam(): string;
}
