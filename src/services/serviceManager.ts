import { ClassOf } from "../core/class";
import { KeyValue } from "../core/keyValue";
import { IServiceProvider } from "./serviceProvider";

export interface IServiceManager extends IServiceProvider {

    /**
     * Creates a new service on the manager. If a provider already exists
     * and is not registered yet, we will replace it or we will throw an
     * error.
     * 
     * @param name 
     * @param provider 
     */
    newService(name: string, provider: ClassOf<IServiceProvider>): IServiceManager;

    /**
     * Sets the service providers this manager has to handle.
     * 
     * @param providers 
     */
    setProviders(providers: KeyValue<ClassOf<IServiceProvider>>): void;

    /**
     * Registers services by name if it exists and not already loaded.
     * 
     * @param name 
     */
    registerServiceByName(name: string): boolean;

    /**
     * Returns true if the service already loaded/registered.
     * 
     * @param name 
     */
    isServiceLoaded(name: string): boolean;
}