import { IMessage } from './message';
import { ISendable } from './sendable';
import { ILaterTime } from './laterTime';

export interface IDispatcher<T extends ISendable = IMessage> {
    /**
     * Sends the given message immediately.
     *
     * @param message
     */
    now(message: T): void;

    /**
     * Sends the given message after a delay.
     *
     * @param message
     * @param later
     */
    later(message: T, later: ILaterTime): void;
}
