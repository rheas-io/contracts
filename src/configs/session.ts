import { IConfig } from './config';
import { SameSite } from '../cookies/sameSite';

export interface ISessionConfig extends IConfig {
    /**
     * Application session store.
     *
     * @property
     */
    store: string;

    /**
     * Session lifetime in minutes.
     *
     * @property
     */
    lifetime: number;

    /**
     * Set false if the session should persist even after closing
     * the client browser.
     *
     * @property
     */
    expire_on_close: boolean;

    /**
     * The path where cookie is valid.
     *
     * @property
     */
    path: string;

    /**
     * The domain where cookie is valid.
     *
     * @property
     */
    domain: string;

    /**
     * Set true if the cookie has to be sent over a secure channel only.
     *
     * @property
     */
    secure: boolean;

    /**
     * Set true if the cookie should be accessible only in HTTP headers
     * and not in Javascript.
     *
     * @property
     */
    httpOnly: boolean;

    /**
     * Set true if cookies should not be urlencoded.
     *
     * @property
     */
    raw: boolean;

    /**
     * Property that determine whether cookies are restricted to same site (STRICT)
     * or it does allow third party sites (LAX).
     *
     * @property
     */
    sameSite: SameSite;
}
