export interface IUriComponent {
    /**
     * Single route uri segment obtained when the route is split
     * by forward slash (/)
     *
     * @var string
     */
    component: string;
    /**
     * Compares this uriComponent with another one. Returns true
     * if the component values are same.
     *
     * @param uriComponent
     */
    equals(uriComponent: IUriComponent): boolean;
}
