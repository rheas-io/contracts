import { IQueableData } from './queableData';
import { JsonObject } from '../core/keyValue';

export interface IQueable<T extends JsonObject> {
    /**
     * The data that has to be saved in the queue store, so that the job
     * can be retreived later from the store and can be parsed to process
     * the job.
     *
     * @returns
     */
    queableData(): IQueableData<T>;
}
