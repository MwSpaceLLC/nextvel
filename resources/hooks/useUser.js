import useSWR from 'swr'

import {fetcher} from "../functions";

export default function useUser() {

    const {data, error} = useSWR('/api/auth/user', fetcher)

    return [
        data || {}, // user
        !error && !!data, // loggedIn
    ]
}