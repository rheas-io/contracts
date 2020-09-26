type IAppKeys =
    | 'env'
    | 'configs'
    | 'services'
    | 'db'
    | 'router'
    | 'url'
    | 'cli'
    | 'mail'
    | 'view'
    | 'hash'
    | 'encrypt';

type IRequestKeys = 'cookie' | 'session' | 'redirect';

export { IAppKeys, IRequestKeys };
