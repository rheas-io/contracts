export interface ICommand {
    /**
     * Processes the command.
     */
    handle(): void;
}
