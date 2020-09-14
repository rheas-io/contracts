import { IView } from './view';

export interface IViewFactory {
    /**
     * Creates a new view object at the specified source directory.
     * If no directory is given, application default views directory
     * is used.
     *
     * @param srcDir
     */
    createNewView(srcDir?: string): IView;

    /**
     * Sets a new source directory. This will change the default application
     * views directory.
     *
     * @param srcDir
     */
    setSourceDirectory(srcDir: string): IViewFactory;

    /**
     * Sets a key value data that has to be shared across different
     * views.
     *
     * @param key
     * @param data
     */
    share(key: string, data: any): IViewFactory;
}
