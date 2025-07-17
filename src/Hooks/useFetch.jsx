// import React from 'react'
// import { useState, useEffect } from 'react'

// function useFetch() {

//     const [data, setData] = useState({})

//     useEffect( ()=> {
//         fetch(`https://jsonplaceholder.typicode.com/photos`)
//         .then(response => response.json())
//         .then(response => setData(response[obj]))
//     }, [obj])
    
//     console.log(data)
//     return data
// }

// export default useFetch;

import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return; // Prevent fetching if URL is not provided

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
