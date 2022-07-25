
export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const fetcher = (url) => fetch(url).then((res) => res.json());