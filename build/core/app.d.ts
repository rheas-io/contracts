import { IServer } from "./server";
import { IContainer } from "../container/container";
export interface IApp extends IContainer, IServer {
    startApp(): void;
    config<T>(key: string, defaultValue?: T): T | null;
    getRootPath(): string;
    getAssetPath(): string;
}
