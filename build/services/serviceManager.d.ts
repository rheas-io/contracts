import { ClassOf } from "../core/class";
import { KeyValue } from "../core/keyValue";
import { IServiceProvider } from "./serviceProvider";
export interface IServiceManager extends IServiceProvider {
    /**
     * Sets the service providers this manager has to handle.
     *
     * @param providers
     */
    setProviders(providers: KeyValue<ClassOf<IServiceProvider>>): void;
    /**
     * Loads a deferred service if it's not alreayd registered.
     *
     * @param key
     * @return true if service loaded on request
     */
    loadDeferredService(key: string): boolean;
}
