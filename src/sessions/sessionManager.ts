import { ISession } from './session';

export interface ISessionManager {
    /**
     * Creates a new session and returns it.
     *
     * @returns
     */
    createSession(): Promise<ISession>;
}
