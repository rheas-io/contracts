import { IDbConfig } from "../database/config";
import { IUser } from "../auth/user";
export interface IConfig {
    db: IDbConfig;
    app: {
        port: number;
        name: string;
        debug: boolean;
        maintenance: boolean;
    };
    user: {
        model: IUser;
    };
}
