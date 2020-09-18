import { ICommand } from './command';
import { ClassOf } from '../core/class';

export interface ICli {
    /**
     * Entry point of command line request processor. This function routes
     * the command to its respective handler. If no command is registered, we
     * will exit showing all the command list.
     */
    handleRequest(): void;

    /**
     * Registers a new command class mapped to `key`
     *
     * @param key
     * @param handlerClass
     */
    addCommand(key: string, handlerClass: ClassOf<ICommand>): ICli;

    /**
     * Checks if a command with the given key is already registered.
     *
     * @param key
     */
    hasCommand(key: string): boolean;
}
