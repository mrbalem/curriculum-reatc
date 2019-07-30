import {useState, useEffect} from 'react';
const api = "https://us-central1-fir-api-e8fbf.cloudfunctions.net/api";
const useGetdata = () => {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
return mydata;
}

export default useGetdata;