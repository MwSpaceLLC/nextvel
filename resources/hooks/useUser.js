import {useSelector} from "react-redux";

/**
 *
 * @returns {unknown[]}
 */
export default function useUser() {

    const {auth} = useSelector((state) => state.user)

    // const [user, setUser] = useState(auth)
    // useEffect(() => setUser(auth), [auth])

    return [
        auth || {}, // user
        !!auth.id, // loggedIn
    ]
}