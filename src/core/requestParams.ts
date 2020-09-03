import { IRequestComponent } from '../routes/uri';

export interface IRequestParams extends Map<string, string> {
    /**
     * Sets the parameters from the given uri components. Older
     * values are cleared before setting new values.
     *
     * @param components
     */
    setParameters(components: IRequestComponent[]): void;
}
