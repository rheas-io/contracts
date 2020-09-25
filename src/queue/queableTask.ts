import { JsonObject } from '../core/keyValue';

export interface IQueableTask<T extends JsonObject = any> {
    /**
     * The data that has to be saved in the queue store, so that the task
     * can be recreated from the data.
     *
     * @returns
     */
    queableTaskData(): T;
}
