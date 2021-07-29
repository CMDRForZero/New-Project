import React, {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        };
        fetchData();

    }, [url]);

    return {data, loading};
};

export default useFetch

/*
export default url => {
    const baseUrl = 'http://localhost/api';
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = (options = {}) => {
        setOptions(options)
    }
    //return [{data, isLoading}, doFetch];

    const [data, setData] = useState */

/*
export default url => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    const doFetch = () => {}

    return [{isLoading, response, error}, doFetch]
}*/
