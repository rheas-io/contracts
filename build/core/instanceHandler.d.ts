import { IContainer } from "./container";
export interface InstanceHandler<T> {
    (app?: IContainer): T;
}
