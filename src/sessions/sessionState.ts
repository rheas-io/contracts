import { AnyObject } from '../core/keyValue';

export interface ISessionState {
    session: string;
    encrypted: boolean;
    lastAccessed: number;
}
