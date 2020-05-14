import { IContainer } from "./container";

export interface InstanceHandler {
    (container: IContainer): any;
}