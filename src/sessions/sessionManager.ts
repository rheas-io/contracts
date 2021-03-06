import { ISession } from './session';
import { ICookie } from '../cookies';
import { AnyObject } from '../core/keyValue';
import { IRequest } from '../core/request';

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
     * Ends the given session by writing it to the data store.
     *
     * @param session
     */
    endSession(session: ISession): ISessionManager;

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
     * Returns a cookie with the given name, value and expiry. Other
     * properties are populated from the session configuration data.
     *
     * @param name
     * @param value
     * @param expiry
     */
    getCookie(name: string, value: string, expiry: number): ICookie;

    /**
     * Sets the config session properties on the cookie and
     * returns it.
     *
     * @param cookie
     */
    getCookieWithConfigProperties(cookie: ICookie): ICookie;

    /**
     * Returns true if the expire_on_close flag is set to a truthy value
     * on the session configuration.
     *
     * @returns
     */
    shouldExpireOnClose(): boolean;

    /**
     * Returns the session configurations.
     *
     * @returns
     */
    getSessionConfig(): AnyObject;

    /**
     * Sets the name of the session cookie.
     *
     * @param name
     */
    setSessionCookieName(name: string): ISessionManager;

    /**
     * Returns the session cookie name
     *
     * @returns
     */
    getSessionCookieName(): string;
}
