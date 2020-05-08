export interface IDeferredService {
    /**
     * Returns a string which is the binding for the provider. Registers
     * the provider only if application requests a binding of this keyword.
     *
     * @return string
     */
    provide(): string;
}
