import { useState, useEffect } from 'react';
import { getData } from '~/helpers/requests';
import { getCounter } from '~/helpers/requests';

export default function Server() {
    const [serverText, setServerText] = useState("");
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setServerText(data);
        }
        fetchData()
    });
    return <div> The server says: {serverText}</div>;
}