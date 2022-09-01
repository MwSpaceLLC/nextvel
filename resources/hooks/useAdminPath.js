import {useEffect, useState} from "react";

/**
 *
 * @returns {string}
 */
export default function useAdminPath() {

    const [location, setLocation] = useState(`/admin`);

    function getReverseToken() {
        const path = window.location.pathname.split('/');
        const cursor = path.indexOf('admin', 0) + 1

        setLocation(`/admin/${path[cursor]}`)
    }

    useEffect(getReverseToken, [])

    return location
}