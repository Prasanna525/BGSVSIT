import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(results => setposts(results.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </div>
    );
};

export default DataFetching;
