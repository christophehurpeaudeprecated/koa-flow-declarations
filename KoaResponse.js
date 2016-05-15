/* global Buffer, Stream */

export type KoaResponse = {
    /** Response header object */
    header: Object;
    /** Response header object. Alias as response.header. */
    headers: Object;
    /** Request socket */
    socket: Object;
    /** Response status. By default, response.status is not set unlike node's res.statusCode which defaults to 200. */
    status: number|undefined;
    /** response status message. By default, response.message is associated with response.status. */
    message: string|undefined;
    /** response Content-Length as a number when present, or deduce from this.body when possible, or undefined */
    length: number|undefined;
    /** response body */
    body: string|Buffer|Stream|Object|null;
    /** Get a response header field value with case-insensitive field. */
    get(field: string): string;
    /** Set response header field to value */
    set(field: string, value: string);
    /** Append additional header field with value val. */
    append(field: string, value: string);
    /** Remove header field. */
    remove(field: string);
    /** response Content-Type void of parameters such as "charset". */
    type: string;
    /** Very similar to this.request.is(). Check whether the response type is one of the supplied types. This is particularly useful for creating middleware that manipulate responses. */
    is(...types: Array<string>): boolean;
    /**
     * Perform a [302] redirect to url.
     * The string "back" is special-cased to provide Referrer support, when Referrer is not present alt or "/" is used.
     */
    redirect(url: string, alt ?: string);
    /** Set Content-Disposition to "attachment" to signal the client to prompt for download. Optionally specify the filename of the download. */
    attachment(filename?: string);
    /** Check if a response header has already been sent. Useful for seeing if the client may be notified on error. */
    headerSent: boolean;
    /** Last-Modified header as an appropriate UTC string. You can either set it as a Date or date string. */
    lastModified: Date;
    /** Set the ETag of a response including the wrapped "s. Note that there is no corresponding response.etag getter. */
    etag: string;
    /** Vary on field. */
    vary(field: string);
};
