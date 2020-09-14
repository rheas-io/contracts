import { AnyObject } from '../core/keyValue';

export interface IView {
    /**
     * Returns the html string of the template file at the path given.
     * Path can be file path or dotted path relative to views source 
     * directory. The dottd format will be resolved from this view's source 
     * directory which is set when object is created.
     *
     * @param path
     * @param data
     */
    render(path: string, data?: AnyObject): string;

    /**
     * Returns the complete view file path resolved from the views source
     * directory.
     *
     * @param path
     */
    getViewFilePath(path: string): string;

    /**
     * Sets a data on the view that has to be used when rendering.
     *
     * @param key
     * @param value
     */
    with(key: string, value: any): IView;
}
