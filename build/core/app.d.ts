import { IServer } from "./server";
import { IContainer } from "../container/container";
export interface IApp extends IContainer, IServer {
    startApp(): void;
    config(key: string): any;
    getRootPath(): string;
    getAssetPath(): string;
}
