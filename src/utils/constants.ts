// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
export const URL_REGEX = /^(https?:\/\/)?([\d.a-z-]+)\.([.a-z]{2,6})([\w ./-]*)*\/?$/;

export const ALLOWED_SIZES = [100, 200, 300, 400, 500, 600, 700] as const;