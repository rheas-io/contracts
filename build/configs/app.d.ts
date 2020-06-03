import { AnyObject } from "../core/keyValue";
export declare enum AppCipher {
    "AES-128-CBC" = "aes-128-cbc",
    "AES-256-CBC" = "aes-256-cbc"
}
export interface IAppConfig extends AnyObject {
    key: string;
    cipher: AppCipher;
}
