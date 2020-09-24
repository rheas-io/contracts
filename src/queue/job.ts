import { IQueable } from './queable';
import { JsonObject } from '../core/keyValue';
import { ILaterTime } from '../notifications';

export interface IJob<T extends JsonObject = any> extends IQueable<T> {
    /**
     * Starts processing the job.
     *
     * @returns
     */
    process(): Promise<any>;

    /**
     * Perform some action when the job processes completely.
     */
    onSuccess(): Promise<any>;

    /**
     * Perform some action when the job process fails. This is executed every
     * time the job process fails.
     */
    onFailure(): Promise<any>;

    /**
     * Perform some action when the job process fails permanently. This is executed
     * when the job hits the max attempt limit and still fails. The job will no longer
     * be attempted after marking it as permanent failure.
     */
    onPermanentFailure(): Promise<any>;

    /**
     * Returns true if the job processing has failed maxAttempts.
     *
     * @returns
     */
    triedMaxAttempts(): boolean;

    /**
     * Returns the unique job id if one is already set, or we will set
     * one and return it.
     *
     * @returns
     */
    id(): Promise<string>;

    /**
     * Returns the number of times the job process was attempted.
     *
     * @returns
     */
    attempts(): number;

    /**
     * Sets the max attempts a worker should make before marking this job
     * as a permanent failure.
     *
     * @returns
     */
    maxAttempts(attempts: number): IJob<T>;

    /**
     * Sets the queue on which the job must be executed.
     *
     * @param queue
     */
    onQueue(queue: string): IJob<T>;

    /**
     * Returns the queue in which the job has to be executed.
     *
     * @returns
     */
    queue(): string;

    /**
     * The UNIX epoch time in ms at which the job was locked for processing
     * by a worker.
     *
     * @returns
     */
    lockTime(): number;

    /**
     * Returns the UNIX epoch time in ms at which the job is available for
     * processing.
     *
     * @return
     */
    availableAt(): number;

    /**
     * Sets the number of seconds after which a failed job should be retried.
     *
     * @returns
     */
    retryAfter(seconds: number): IJob<T>;

    /**
     * Returns true, if the job is still locked or has not passed it's retry time.
     *
     * @returns
     */
    isStillLocked(): boolean;

    /**
     * Returns true, if the job has passed its delay time.
     *
     * @returns
     */
    isAvailable(): boolean;

    /**
     * Cancels a job in the queue.
     *
     * @returns
     */
    cancel(): Promise<IJob<T>>;

    /**
     * Returns true if the job was cancelled before processing.
     *
     * @returns
     */
    isCancelled(): boolean;

    /**
     * Process a job at a later time.
     *
     * @param later
     */
    later(later: ILaterTime): IJob<T>;
}
