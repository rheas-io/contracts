import { IMail } from './mail';
import { IMessage } from '../notifications';

export interface IMailMessage extends IMessage {
    /**
     * Returns the underlying email.
     *
     * @returns
     */
    mail(): IMail;
}
