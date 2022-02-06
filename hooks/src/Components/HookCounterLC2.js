import React, { useEffect, useState } from 'react';

const HookCounterLC2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Input - ${name}`;
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    );
};

export default HookCounterLC2;
