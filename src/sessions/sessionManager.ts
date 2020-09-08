import { ISession } from './session';

export interface ISessionManager {
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
}
