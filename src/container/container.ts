import { IManager } from "../core/manager";
import { InstanceHandler } from "./instanceHandler";
import { IContainerInstance } from "./containerInstance";

export interface IContainer extends IManager {

    /**
     * Binds a singleton resolver to the container
     * 
     * @param name 
     * @param callback 
     */
    singleton(name: string, resolver: InstanceHandler): IContainerInstance;

    /**
     * Binds a resolver to the container
     * 
     * @param name 
     * @param callback 
     * @param singleton
     */
    bind(name: string, resolver: InstanceHandler, singleton: boolean): IContainerInstance;

    /**
     * Adds an instance to this container. Any type of object can
     * be passed as an argument and returns the same after adding it to
     * container.
     * 
     * @param name 
     * @param instance 
     * @param singleton
     */
    instance<T>(name: string, instance: T, singleton: boolean): IContainerInstance;
}