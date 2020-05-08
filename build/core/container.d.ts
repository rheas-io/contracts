import { IManager } from "./manager";
import { InstanceHandler } from "./instanceHandler";
export interface IContainer extends IManager {
    /**
     * Property to call when a singleton has to be added to
     * this container.
     *
     * @param name
     * @param callback
     */
    singleton(name: string, callback: InstanceHandler): void;
    /**
     * Adds an instance to this container. Any type of object can
     * be passed as an argument and returns the same after adding it to
     * container.
     *
     * @param name
     * @param instance
     */
    instance<T>(name: string, instance: T): T;
}
