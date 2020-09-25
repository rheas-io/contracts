import { JsonObject } from '../core/keyValue';
import { Options } from 'nodemailer/lib/mailer';

export interface IJsonMail extends JsonObject {
    /**
     * The channel through which the `MailMessage` has to be delivered.
     *
     * @property
     */
    channel: string;

    /**
     * Contains all the data needed for delivering an email through
     * NodeMailer.
     *
     * @property
     */
    mail: Options & JsonObject;
}
