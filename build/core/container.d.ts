import { InstanceHandler } from "./instanceHandler";
export interface IContainer {
    /**
     * Property to call when a singleton has to be added to
     * this container.
     *
     * @param name
     * @param callback
     */
    singleton<T>(name: string, callback: InstanceHandler<T>): T;
    /**
     * Adds an instance to this container. Any type of object can
     * be passed as an argument and returns the same after adding it to
     * container.
     *
     * @param name
     * @param instance
     */
    instance<T>(name: string, instance: T): T;
    /**
     * Returns the binding stored in this container.
     *
     * @param key
     * @param defaultValue
     */
    get<T = any>(key: string, defaultValue: T | null): T | null;
}
