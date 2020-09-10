import { ISession } from './session';
import { ICookie } from '../cookies';
import { AnyObject } from '../core/keyValue';

export interface ISessionManager {
    /**
     * Loads the session with the given id from the current active
     * driver.
     *
     * @param id
     */
    loadSession(id: string): Promise<ISession | null>;

    /**
     * Starts the given session, if it is a valid session. Otherwise
     * creates a new session and sets it as the current/active session of
     * the request cycle.
     *
     * @param session
     */
    startSession(session: ISession | null): Promise<ISession>;

    /**
     * Sets a session as the current/active session of the request lifecycle.
     *
     * @param session
     */
    setActiveSession(session: ISession): ISessionManager;

    /**
     * Ends the current session by writing it to the data store.
     *
     * @returns
     */
    endSession(): ISessionManager;

    /**
     * Returns the active request session if one is available or
     * `null` is returned.
     */
    getSession(): ISession | null;

    /**
     * Creates a new session and returns it.
     *
     * @returns
     */
    createSession(): Promise<ISession>;

    /**
     * Returns the session lifetime in seconds. Value is read from
     * sessions.lifetime config data. If it is not available, a default
     * value of 120 minutes lifetime is used.
     *
     * @returns
     */
    getSessionLifetimeInSeconds(): number;

    /**
     * Returns the session cookie.
     *
     * @returns
     */
    sessionCookieOf(session: ISession): ICookie;

    /**
     * Returns the CSRF cookie.
     *
     * @returns
     */
    csrfCookieOf(session: ISession): ICookie;

    /**
     * Sets the config session properties on the cookie and
     * returns it.
     *
     * @param cookie
     */
    getCookieWithConfigProperties(cookie: ICookie): ICookie;

    /**
     * Returns the session configurations.
     *
     * @returns
     */
    getSessionConfig(): AnyObject;

    /**
     * Returns the hashed CSRF token value.
     *
     * @returns
     */
    hashedCsrfOf(session: ISession): Promise<string>;

    /**
     * Sets the name of the session cookie.
     *
     * @param name
     */
    setSessionCookieName(name: string): ISessionManager;

    /**
     * Sets the name of the CSRF cookie.
     *
     * @param name
     */
    setCsrfCookieName(name: string): ISessionManager;

    /**
     * Returns the session cookie name
     *
     * @returns
     */
    getSessionCookieName(): string;

    /**
     * Returns the CSRF cookie name
     *
     * @returns
     */
    getCsrfCookieName(): string;
}
