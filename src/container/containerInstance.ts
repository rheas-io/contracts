import { InstanceHandler } from './instanceHandler';

export interface IContainerInstance {
    /**
     * Executes the service provider callback and returns the callback
     * return.
     *
     * @return any resolved instance
     */
    resolve(): any;

    /**
     * Removes the resolved instance.
     */
    unresolve(): void;

    /**
     * Sets new resolver for the key.
     *
     * @param resolver
     */
    setResolver(resolver: InstanceHandler): IContainerInstance;

    /**
     * Sets new instance for the key.
     *
     * @param instance
     */
    setInstance<T>(instance: T): IContainerInstance;

    /**
     * Sets the singleton status of the key. Once singleton set, resolver
     * or instance can't be modified.
     *
     * @param singleton
     */
    setSingleton(singleton: boolean): IContainerInstance;

    /**
     * Returns binding singleton status.
     *
     * @return boolean
     */
    isSingleton(): boolean;

    /**
     * Returns the resolved instance of this binding. If an instance
     * already exists, then that value is returned. Otherwise the binding
     * is resolved and returned.
     *
     * @return any
     */
    getResolved(): any;
}
