import React, { useState } from 'react';
import axios from 'axios';

const DataPosting = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataPosting;
