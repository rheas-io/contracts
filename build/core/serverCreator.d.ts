/// <reference types="node" />
import { ServerOptions, RequestListener, Server } from "http";
export interface IServerCreator {
    (options: ServerOptions, listener?: RequestListener): Server;
}
