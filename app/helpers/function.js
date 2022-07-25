import slugify from "slugify";
import moment from "moment";
import crypto from "crypto";

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const stringify = (obj) => JSON.parse(JSON.stringify(obj));

export const slugProduct = (product) => '/search/' + slugify(product.id + '-' + product.name).toLowerCase()

export const slugCategory = (category) => '/search/' + slugify(category.id + '-' + category.name).toLowerCase()

export const slugCategoryProduct = (product) => '/search/' + product.categories.map((category) => slugify(category.id + '-' + category.name)).join('_').toLowerCase() + '/' + slugify(product.id + '-' + product.name).toLowerCase()

export const generateToken = (replace) => (crypto.randomUUID() + crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, replace ?? '')

export const tokenIsExpired = (token, minutes = 5) => moment(token.createdAt).add(minutes, 'minutes').valueOf() < moment().valueOf()