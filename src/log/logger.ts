import { IException } from "../errors";

export interface ILogger {
    /**
     * Logs an exception
     * 
     * @param err 
     */
    logException(err: IException): void;
}