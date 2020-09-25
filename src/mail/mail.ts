import { AnyObject, JsonObject } from '../core/keyValue';
import { Address, Options } from 'nodemailer/lib/mailer';

export type Addresses = string | Address | Array<string | Address>;

export interface IMail {
    /**
     * Sets the email from address.
     *
     * @param email
     */
    from(email: string | Address): IMail;

    /**
     * Sets the email replyTo address.
     *
     * @param email
     */
    replyTo(email: string | Address): IMail;

    /**
     * Sets the email to address.
     *
     * @param email
     */
    to(email: Addresses): IMail;

    /**
     * Sets the email cc addresses.
     *
     * @param email
     */
    cc(email: Addresses): IMail;

    /**
     * Sets the email to address.
     *
     * @param email
     */
    bcc(email: Addresses): IMail;

    /**
     * Sets the email subject.
     *
     * @param subject
     */
    subject(subject: string): IMail;

    /**
     * Sets the email HTML contents.
     *
     * @param html
     */
    html(html: string): IMail;

    /**
     * Sets the email text contents.
     *
     * @param text
     */
    text(text: string): IMail;

    /**
     * Sets the email raw contents.
     *
     * @param raw
     */
    raw(raw: string): IMail;

    /**
     * Sets new nodemailer data. This function will override any existing data
     * that is set for a duplicate key in the `fields`.
     *
     * @param fields
     */
    setData(fields: Options & JsonObject): IMail;

    /**
     * Gets the html from the view and sets it as the view html.
     *
     * If a srcDir is provided, view path will be resolved from that dir. Otherwise,
     * it will be resolved from the applications default `views` directory.
     *
     * @param path
     * @param data
     * @param srcDir
     */
    view(path: string, data?: AnyObject, srcDir?: string): IMail;

    /**
     * Returns true if the mail has atleast one recipient.
     *
     * @returns
     */
    hasRecipients(): boolean;

    /**
     * Returns the html content of this email.
     *
     * @returns
     */
    render(): string;

    /**
     * Returns the email details including the envelope.
     *
     * @returns
     */
    data(): Options & JsonObject;
}
