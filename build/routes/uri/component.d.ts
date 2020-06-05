export interface IUriComponent {
    /**
     * Returns the path segment as it is.
     *
     * @returns string
     */
    getSegment(): string;
    /**
     * Compares this uriComponent with another one. Returns true
     * if the component values are same.
     *
     * @param uriComponent
     */
    equals(uriComponent: IUriComponent): boolean;
}
