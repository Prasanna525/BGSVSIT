import React from 'react';

const Greeting = (props) => {
    const { name, children } = props;

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>{children}</p>
        </div>
    );
};

export default Greeting;
