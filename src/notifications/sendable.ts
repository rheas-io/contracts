export interface ISendable {
    /**
     * Initiates the send process.
     *
     * @returns
     */
    send(): Promise<void>;
}
