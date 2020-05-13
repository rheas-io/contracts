import { ServerResponse } from "http";

export interface IResponse extends ServerResponse {

    /**
     * Creates a redirect response.
     * 
     * @param to 
     * @param status 
     */
<<<<<<< HEAD
    redirect(to: string, status?: number): IResponse;
=======
    redirect(to: string, status: number): IResponse;
>>>>>>> fc8146dc560435ad79cff45be1f71f30e72111b6
}