import { IServer } from './server';
import { IGetter } from './getter';
import { IServiceManager } from '../services';
import { IContainer } from '../container/container';
import { IServiceListener } from '../services/serviceListener';

export type InternalAppBindings =
    | 'db'
    | 'env'
    | 'url'
    | 'cli'
    | 'mail'
    | 'core'
    | 'view'
    | 'hash'
    | 'error'
    | 'router'
    | 'kernal'
    | 'configs'
    | 'encrypt'
    | 'services'
    | 'middlewares'
    | 'path.root'
    | 'path.env'
    | 'path.configs'
    | 'path.assets'
    | 'path.sessions';

export interface IApp extends IContainer, IServer, IServiceListener {
    /**
     * Sets the app running in console flag to true.
     *
     * @returns
     */
    setRunningInConsole(): IApp;

    /**
     * Returns true if the application is running in console.
     *
     * @returns
     */
    isRunningInConsole(): boolean;

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
    env(): IGetter;

    /**
     * Returns the application config manager.
     *
     * @returns
     */
    configs(): IGetter;

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

    /**
     * Returns the binding stored in this container. Throws an exception
     * if no binding is registered for the key, or there are any error
     * resolving the binding.
     *
     * @param key
     */
    get(key: InternalAppBindings): any;
    get(key: string): any;
}
