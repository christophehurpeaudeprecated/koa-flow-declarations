import type { KoaRequest } from './KoaRequest';
import type { KoaResponse } from './KoaResponse';
import type { KoaCookies } from './KoaCookies';

export type KoaContext = {
    /** Node Request */
    req: Object;
    /** Node Response */
    res: Object;

    request: KoaRequest;
    response: KoaResponse;

    /** The recommended namespace for passing information through middleware and to your frontend views. */
    state: Object;

    cookies: KoaCookies;

    throw(msg?: string, status?: number, properties?: Object);
    assert(value: any, msg?: string, status?: number, properties?: Object);


    /* Request aliases */

    /** Request header object */
    header: { [key: string]: string };
    /** Request header object. Alias as request.header. */
    headers: { [key: string]: string };
    method: string;
    url: string;
    originalUrl: string;
    /** origin of URL, include protocol and host. */
    origin: string;
    /** full request URL, include protocol, host and url. */
    href: string;
    /** request pathname */
    path: string;
    /** raw query string void of ?. */
    querystring: string;
    /** raw query string with ?. */
    search: string;
    /** Get host (hostname:port) when present. Supports `X-Forwarded-Host` when `app.proxy` is true, otherwise Host is used. */
    host: string;
    /** Get hostname when present. Supports `X-Forwarded-Host` when `app.proxy` is true, otherwise Host is used. */
    hostname: string;
    /** Get parsed query-string, returning an empty object when no query-string is present. Note that this getter does not support nested parsing. */
    query: { [key: string]: string };
    /** Check if a request cache is "fresh", aka the contents have not changed. This method is for cache negotiation between If-None-Match / ETag, and If-Modified-Since and Last-Modified. It should be referenced after setting one or more of these response headers. */
    fresh: boolean;
    /** Inverse of request.fresh */
    stale: boolean;
    /** Return request protocol, "https" or "http". Supports X-Forwarded-Proto when app.proxy is true. */
    protocol: string;
    /** Shorthand for this.protocol == "https" to check if a request was issued via TLS. */
    secure: boolean;
    /** Request remote address. Supports X-Forwarded-For when app.proxy is true. */
    ip: string;
    /** When X-Forwarded-For is present and app.proxy is enabled an array of these ips is returned, ordered from upstream -> downstream. When disabled an empty array is returned. */
    ips: Array<string>;
    /**
     * Return subdomains as an array.
     *
     * Subdomains are the dot-separated parts of the host before the main domain of the app. By default, the domain of the app is assumed to be the last two parts of the host. This can be changed by setting app.subdomainOffset.
     *
     * For example, if the domain is "tobi.ferrets.example.com": If app.subdomainOffset is not set, this.subdomains is ["ferrets", "tobi"]. If app.subdomainOffset is 3, this.subdomains is ["tobi"].
     */
    subdomains: Array<string>;
    /** Check if the incoming request contains the "Content-Type" header field, and it contains any of the give mime types. If there is no request body, undefined is returned. If there is no content type, or the match fails false is returned. Otherwise, it returns the matching content-type. */
    is(...types: Array<string>): boolean;
    accepts(...types: Array<string>): Array<string>|boolean;
    acceptsEncodings(...types: Array<string>): Array<string>|boolean;
    acceptsCharsets(...types: Array<string>): Array<string>|boolean;
    acceptsLanguages(...types: Array<string>): Array<string>|boolean;
    /** Return the request socket */
    socket: Object;
    /** Return request header */
    get(field: string): string;

    /* Response aliases */


    /** response body */
    body: string|Buffer|Stream|Object|null;
    /** Response status. By default, response.status is not set unlike node's res.statusCode which defaults to 200. */
    status: number|undefined;
    /** response status message. By default, response.message is associated with response.status. */
    message: string|undefined;
    /** response Content-Length as a number when present, or deduce from this.body when possible, or undefined */
    length: number|undefined;
    /** Set response header field to value */
    set(field: string, value: string);
    /** Append additional header field with value val. */
    append(field: string, value: string);
    /** Remove header field. */
    remove(field: string);
    /** response Content-Type void of parameters such as "charset". */
    type: string;
    /**
     * Perform a [302] redirect to url.
     * The string "back" is special-cased to provide Referrer support, when Referrer is not present alt or "/" is used.
     */
    redirect(url: string, alt?: string);
    /** Set Content-Disposition to "attachment" to signal the client to prompt for download. Optionally specify the filename of the download. */
    attachment(filename?: string);
    /** Check if a response header has already been sent. Useful for seeing if the client may be notified on error. */
    headerSent: boolean;
    /** Last-Modified header as an appropriate UTC string. You can either set it as a Date or date string. */
    lastModified: Date;
    /** Set the ETag of a response including the wrapped "s. Note that there is no corresponding response.etag getter. */
    etag: string;
};
