export interface IBcryptConfig {
    rounds: number;
}

export interface IArgonConfig {
    memory: number,
    threads: number,
    time: number
}

export interface IHashConfig {
    key: string,
    driver: string,
    bcrypt: IBcryptConfig,
    argon: IArgonConfig
}