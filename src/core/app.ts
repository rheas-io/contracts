import { IServer } from './server';
import { IManager } from './manager';
import { IServiceManager } from '../services';
import { IContainer } from '../container/container';

export interface IApp extends IContainer, IServer {
    /**
     * Starts the application. Boots all the registered services,
     * creates a database connection and listen for requests.
     */
    startApp(): void;

    /**
     * This function boots all the application services.
     *
     * The application services should be booted before it starts
     * listening to requests.
     */
    bootServices(): void;

    /**
     * Returns the application environment variable manager.
     *
     * @returns
     */
    env(): IManager;

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
     * Exception keys setter. Throughout the app certain exceptions will have
     * to be made to services/operations.These are set using this function.
     *
     * For example, csrf should be exempt from certain routes. These
     * exception route list has to be set on the app instance.
     *
     * @param key
     * @param value
     */
    setExceptions(key: string, value: string[]): IApp;

    /**
     * Returns the exceptions set for the given key.
     *
     * @param key
     */
    exceptions(key: string): string[];

    /**
     * Returns path to the folder. If no arg is given, root path
     * is returned.
     *
     * @param folder
     */
    path(folder?: string): string;
}
