import { IApp } from "./app";
export interface InstanceBinder<T> {
    (app?: IApp): T;
}
