export declare enum AppCipher {
    "AES-128-CBC" = "AES-128-CBC",
    "AES-256-CBC" = "AES-256-CBC"
}
export interface IAppConfig {
    key: string;
    cipher: AppCipher;
}
