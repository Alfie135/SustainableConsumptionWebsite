import { useState, useEffect } from 'react';
import { getCounter, postCounter } from '~/helpers/requests';
import './counter.css';

export default function Counter() {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        async function fetchCounter() {
            const dataCounter = await getCounter();
            setCounter(dataCounter);
        }

        fetchCounter()
    }, []);

    function onClick() {
        postCounter(counter + 1);
        setCounter(counter + 1);
    }

    return (
        <div className="flexbox">
            <p>{counter}</p>
            <button className="button"
                onClick={onClick}
            >
                Add one
            </button>
        </div>
    );
}