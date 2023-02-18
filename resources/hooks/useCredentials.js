/**
 *
 * @param target
 * @param credentials
 * @returns {{}}
 */
export default function useCredentials(target = null, credentials = {}) {

    const obj = (target || document).querySelectorAll('input');

    obj.forEach(item => Object.assign(credentials, {[item.name]: item.value}))

    return credentials
}