import { IContainer } from "./container";

export interface InstanceHandler {
    (app?: IContainer): void;
}