import { IJob } from './job';

export interface IQueue {
    /**
     * Adds a new job to the queue. Stores it on the queue store and triggers
     * the queue processor on the `nextTick`. If the job has to be scheduled,
     * a delay timer is set to fetch the next jobs when the timout hits.
     *
     * @param job
     */
    insert(job: IJob): Promise<boolean>;

    /**
     * The queue works on itself during the lifetime of the application. We
     * poll queue every n seconds set by `_pollInterval` property for the next
     * jobs and process them.
     *
     * External workers can also consume jobs, if they have access to the queue
     * store.
     *
     * @returns
     */
    work(): Promise<any>;

    /**
     * Processes a job in the queue.
     *
     * @param job
     */
    processJob(job: IJob): Promise<any>;

    /**
     * Mark the job as failed on the active queue list. The job will
     * be retried when the reserved time passes the retry time period.
     *
     * @param job
     */
    failJob(job: IJob, err?: Error): Promise<any>;

    /**
     * Marks the job as failed forever. This happens when the job has
     * already hit the max retry limit. Remove the job from the active
     * queue list, as we won't retry it again.
     *
     * @param job
     */
    failJobForever(job: IJob): Promise<any>;

    /**
     * Marks the job as finished in the queue store.
     *
     * @param job
     */
    finishJob(job: IJob): Promise<any>;

    /**
     * Returns a list of jobs that has to be processed immediately. Return
     * a maximum of n number of jobs set by the property `concurrentJobs`.
     *
     * @returns
     */
    getNextJobs(): Promise<IJob[]>;

    /**
     * Sets the queue processing concurrency.
     *
     * @param concurrentJobs
     */
    setConcurrency(concurrentJobs: number): IQueue;

    /**
     * Sets the job timeout in seconds.
     *
     * @param inSeconds
     */
    setTimeout(inSeconds: number): IQueue;
}
