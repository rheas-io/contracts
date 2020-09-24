import { JsonObject } from '../core/keyValue';

export interface IQueableData<T extends JsonObject> {
    /**
     * Contains the data needed for processing the queued job.
     *
     * @property
     */
    data: T;

    /**
     * Contains the job meta details like id, attempts, job filename
     *
     * @property
     */
    __meta: {
        /**
         * The path to the job file.
         *
         * @property
         */
        fileName: string;

        /**
         * Job class export name in the file.
         *
         * @property
         */
        export: string;
    };
}
