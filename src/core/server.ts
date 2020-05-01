import { IncomingMessage, ServerResponse } from "http";

export interface IServer {

    /**
     * Starts server using node's https module. To start https server,
     * the application config file must contain the certificate file
     * paths.
     */
    enableHttpsServer(): IServer;

    /**
     * Creates a db connection using the connector defined in the app
     * configurations.
     * 
     * @returns Promise
     */
    initDbConnection(): Promise<any>;

    /**
     * Node Http/Https req handler. Requests are dispatched to the router
     * from this handler.
     * 
     * @param req 
     * @param res 
     */
    listenRequests(req: IncomingMessage, res: ServerResponse): void;
}