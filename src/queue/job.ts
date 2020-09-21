import { EventEmitter } from 'events';
import { ILaterTime } from '../notifications';

export interface IJob extends EventEmitter {
    /**
     * Starts processing the job.
     *
     * @returns
     */
    process<T = any>(): Promise<T>;

    /**
     * Process a job at a later time.
     *
     * @param later
     */
    later(later: ILaterTime): void;

    /**
     * Parses the data from the queue store into properties necessary to
     * process the 
     * 
     * @param data 
     */
    parse(data: string): any;

    /**
     * The data that has to be saved in the queue store, so that the job
     * can be retreived later from the store and can be parsed to process
     * the job.
     *
     * @returns
     */
    toString(): string;
}
