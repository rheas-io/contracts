export interface IServiceProvider {
    /**
     * Registers the service provider to the container. Avoid adding cyclic
     * dependency when registering services or else they won't be registered
     * and loop forever.
     * 
     * A `registered` event will be emitted after registering the service.
     */
    register(): void;

    /**
     * Boot function is executed after the service is registered. So any effect
     * carried out using the `registered` callback will be available in the
     * boot function.
     * 
     * A `booted` event will be emitted after service boot.
     */
    boot(): void;

    /**
     * Sets the registration status to true.
     */
    setRegistered(): void;

    /**
     * Sets the booted status to true.
     */
    setBooted(): void;

    /**
     * Returns the registered status of this provider
     *
     * @returns boolean
     */
    isRegistered(): boolean;

    /**
     * Returns the boot status of this provider
     *
     * @returns boolean
     */
    isBooted(): boolean;
}
