import { IConfig } from './config';

export interface IMailConfig extends IConfig {
    /**
     * Default transporter to be used for sending emails.
     *
     * @property string
     */
    transporter: string;

    /**
     * Applications default from address.
     *
     * @property string
     */
    from: string;

    /**
     * Default replyTo address.
     *
     * @property string
     */
    replyTo: string;
}
