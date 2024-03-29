import React, { useEffect, useState } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = e => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('Hook useEffect called');
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            console.log('Hook cleanup called');
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (
        <div>
            <h1>Hook X - {x}, Y - {y}</h1>
        </div>
    );
};

export default HookMouse;
