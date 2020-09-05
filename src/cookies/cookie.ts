export interface ICookie {
    /**
     * Sets a new cookie value.
     *
     * @param value
     */
    setValue(value?: string): ICookie;

    /**
     * Sets the cookie expiry time.
     *
     * @param date
     */
    setExpire(date?: Date): ICookie;

    /**
     * Expires the cookie by setting its expiry time to some time
     * in the past.
     *
     * @returns
     */
    expire(): ICookie;

    /**
     * Creates a cookie that last forever (five years).
     *
     * @returns
     */
    forever(): ICookie;

    /**
     * Sets the path on the server where cookie is valid.
     *
     * @param path
     */
    setPath(path?: string): ICookie;

    /**
     * Sets the domain where the cookie is valid.
     *
     * @param domain
     */
    setDomain(domain?: string): ICookie;

    /**
     * Secure flag indicating whether the cookie should be send only to
     * secure clients.
     *
     * @param secure
     */
    setSecure(secure?: boolean): ICookie;

    /**
     * Sets the flag indicating the usage of cookie only on HTTP protocol.
     * If set true, browser javascript can't access it.
     *
     * @param httpOnly
     */
    setHttpOnly(httpOnly?: boolean): ICookie;

    /**
     * Sets the flag indicating whether to send as it is or urlencoded.
     *
     * @param raw
     */
    setRaw(raw?: boolean): ICookie;

    /**
     * Sets the flag indicating same site usage only.
     *
     * @param sameSite
     */
    setSameSite(sameSite?: string): ICookie;

    /**
     * Returns the cookie name.
     *
     * @returns
     */
    getName(): string;

    /**
     * Returns the cookie value.
     *
     * @returns
     */
    getValue(): string;

    /**
     * Returns the cookie expiry time.
     *
     * @returns
     */
    getExpiry(): Date;

    /**
     * Returns true if the cookie has expired.
     *
     * @returns
     */
    hasExpired(): boolean;

    /**
     * Returns the path where cookie is valid.
     *
     * @returns
     */
    getPath(): string;

    /**
     * Returns the domain where cookie is valid.
     *
     * @returns
     */
    getDomain(): string;

    /**
     * Returns true if the cookie has to be sent only to secure
     * connections.
     * 
     * @returns
     */
    isSecure(): boolean;

    /**
     * Returns true if the cookie should be accessible only with HTTP
     * protocol and not with Javascript.
     * 
     * @returns
     */
    isHttpOnly(): boolean;

    /**
     * Returns if the cookie is raw or not.
     *
     * @returns
     */
    isRaw(): boolean;
}
