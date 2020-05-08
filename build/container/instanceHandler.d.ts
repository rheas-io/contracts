import { IContainer } from "./container";
export interface InstanceHandler {
    <T>(container: IContainer): T;
}
