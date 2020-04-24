import { IApp } from "./app";

export interface InstanceHandler<T> {
    (app?: IApp): T;
}