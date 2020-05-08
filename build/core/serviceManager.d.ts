import { IServiceProvider } from "./serviceProvider";
export interface IServiceManager extends IServiceProvider {
    /**
     * Loads a deferred service if it's not alreayd registered.
     *
     * @param key
     * @return true if service loaded on request
     */
    loadDeferredService(key: string): boolean;
}
