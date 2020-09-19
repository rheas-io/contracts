export interface ICommand {
    /**
     * Processes the command.
     */
    handle(): Promise<void>;
}
