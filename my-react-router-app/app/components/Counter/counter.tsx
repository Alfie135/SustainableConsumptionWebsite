import { useState, useEffect } from 'react';
import { getCounter, postCounter } from '~/helpers/requests';

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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
            <p>{counter}</p>
            <button
                style={{
                    backgroundColor: 'grey',
                    borderRadius: 5,
                    color: 'white',
                    paddingLeft: 4,
                    paddingRight: 4,
                }}
                onClick={onClick}
            >
                Add one
            </button>
        </div>
    );
}