import { IGetter } from './getter';

export interface IHeaders extends IGetter {
    /**
     * Returns a date object if a date header is present and its value is a
     * parsable date string.
     *
     * DefaultValue is returned if no header is found or if the value held is
     * not a valid date.
     *
     * @param key
     * @param defaultValue
     */
    getDate(key: string, defaultValue?: Date | null): Date | null;

    /**
     * Sets the header key to the given value.
     *
     * If replace is set to false, already existing header won't be replaced.
     * Default is to change the header value even if it exists.
     *
     * @param key
     * @param value
     */
    set(key: string, value: string, replace?: boolean): void;

    /**
     * Removes a header from the headerbag.
     *
     * @param key
     */
    remove(key: string): void;

    /**
     * Returns true if headers consists of particular key.
     *
     * @param key
     */
    has(key: string): boolean;
}
