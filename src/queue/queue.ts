import { IJob } from './job';

export interface IQueue {
    /**
     * Adds a new job to the queue. Stores it on the queue store and triggers
     * the queue processor on the `nextTick`. If the job has to be scheduled,
     * a delay timer is set to fetch the next jobs when the timout hits.
     *
     * @param job
     */
    addJob(job: IJob): IQueue;

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
    processJob(job: IJob): Promise<void>;

    /**
     * Returns a list of jobs that has to be processed immediately.
     *
     * @returns
     */
    getNextJobs(): Promise<IJob[]>;

    /**
     * Returns a list of failed jobs.
     *
     * @returns
     */
    getFailedJobs(): Promise<IJob[]>;

    /**
     * Marks the job as finished in the queue store.
     *
     * @param job
     */
    finishJob(job: IJob): Promise<any>;

    /**
     * Sets the queue processing concurrency.
     *
     * @param parallelProcesses
     */
    setConcurrency(parallelProcesses: number): IQueue;
}
