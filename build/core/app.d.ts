import { IServer } from "./server";
import { IManager } from "./manager";
import { IContainer } from "../container/container";
import { IServiceManager } from "../services";
export interface IApp extends IContainer, IServer {
    /**
     * Starts the application. Boots all the registered services,
     * creates a database connection and listen for requests.
     */
    startApp(): void;
    /**
     * Returns the application config manager.
     *
     * @returns
     */
    configs(): IManager;
    /**
     * Returns the application service manager.
     *
     * @returns
     */
    services(): IServiceManager;
    /**
     * Returns path to the folder. If no arg is given, root path
     * is returned.
     *
     * @param folder
     */
    path(folder?: string): string;
}
