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
     * Fetches the jobs to be processed in the next tick and processes
     * all of them.
     *
     * @returns
     */
    processJobs(): Promise<any>;

    /**
     * Resets the queue check timer.
     * 
     * Instead of polling, queue uses a timeout to process jobs. When to process next
     * is determined by the immediate next job in the queue or the guard interval which
     * is the maximum time a queue will sit idle.
     * 
     * The queue uses only one timeout which is reset recursively after every job check
     * or when a new job is added.
     */
    resetTimer(): Promise<void>;

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
