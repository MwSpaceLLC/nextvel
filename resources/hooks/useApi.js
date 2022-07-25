import {useState, useEffect} from "react";

export default function useApi() {

    const [location, setLocation] = useState(`/api`);

    useEffect(() => setLocation(`/api/${window.location.pathname}`), [])

    return location
}