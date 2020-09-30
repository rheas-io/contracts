export interface IServiceListener {
    /**
     * Registers a callback that has to be executed after registering.
     *
     * @param callback
     */
    registered(callback: () => any): void;

    /**
     * Registers a callback that has to be executed after boot.
     *
     * @param callback
     */
    booted(callback: () => any): void;
}
