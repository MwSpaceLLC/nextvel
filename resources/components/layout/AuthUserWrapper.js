import {useDispatch} from "react-redux";
import axios from "axios";
import {setAuthUser} from "../../../store/userReducer";
import {useEffect} from "react";

/**
 *
 * @param children
 * @returns {*}
 */
export default function AuthUserWrapper({children}) {

    const dispatch = useDispatch()

    // todo: check user
    useEffect(() => {
        axios.get('/api/auth/user').then(({data}) => dispatch(setAuthUser(data)))
    }, [])

    return <>{children}</>
}