export interface IServiceProvider {

    /**
     * Registers the service provider to the container. Avoid adding
     * code that require other services inside this function, as they
     * may not be registered yet. Use boot function for that purpose.
     */
    register(): void;

    /**
     * Boots the service provider. Inside the boot function
     * all the app service providers will be registered. So, add
     * the functions that require other service provider inside this
     * function.
     */
    boot(): void;

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