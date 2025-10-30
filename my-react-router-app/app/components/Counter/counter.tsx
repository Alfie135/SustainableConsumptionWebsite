import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

function onClick() {
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
        style ={{
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