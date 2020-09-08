import { AnyObject } from '../core/keyValue';

export interface ISessionState {
    id: string;
    session: string;
    encrypted: boolean;
    lastAccessed: number;
}
