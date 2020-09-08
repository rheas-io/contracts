import { AnyObject } from '../core/keyValue';

export interface ISessionState {
    id: string;
    expiry: number;
    session: string;
    encrypted: boolean;
}
