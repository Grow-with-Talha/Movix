import { useEffect, useState } from "react";
import { fetchDatafromApi } from "../utils/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDatafromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((error) => {
                setLoading(false);
                setError("Something went wrong!");
                console.log(error)
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;