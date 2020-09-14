import { ISendable } from './sendable';

export interface IMessage extends ISendable {
    /**
     * Sets the channel through which this message has to
     * be sent.
     *
     * @param channel
     */
    via(channel: string): IMessage;

    /**
     * This message's channel getter.
     *
     * @returns string
     */
    channel(): string;
}
