type KoaCookiesGetOptions = {
    /** the cookie requested should be signed */
    signed?: boolean;
};

type KoaCookiesSetOptions = {
    /** sign the cookie value */
    signed?: boolean;
    /** cookie expiration */
    expires?: Date;
    /** path, default is `/` */
    path?: string;
    /** domain */
    domain?: string;
    /** secure */
    secure?: boolean;
    /** httpOnly, true by default */
    httpOnly?: boolean;
};

export type KoaCookies = {
    get(name: string, options?: KoaCookiesGetOptions);
    set(name: string, value: string, options?: KoaCookiesSetOptions);
}
