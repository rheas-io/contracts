export interface IUriComponent {
    /**
     * Single route uri segment obtained when the route is split
     * by forward slash (/)
     *
     * @var string
     */
    component: string;
    equals(uriComponent: IUriComponent): boolean;
}
