import { IServer } from "./server";
import { IContainer } from "../container/container";
export interface IApp extends IContainer, IServer {
    /**
     * Starts the application. Boots all the registered services,
     * creates a database connection and listen for requests.
     */
    startApp(): void;
    /**
     * Exception keys setter and getter. Throughout the app certain
     * exceptions will have to be made to services/operations. These
     * are set/get using this function.
     *
     * For example, csrf should be exempt from certain routes. These
     * exception route list has to be set on the app instance.
     *
     * @param key
     * @param value
     */
    exceptions(key: string, value?: string[]): string[];
    /**
     * Returns path to the folder. If no arg is given, root path
     * is returned.
     *
     * @param folder
     */
    path(folder?: string): string;
}
