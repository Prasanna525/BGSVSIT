import React, { Component } from 'react';

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const results = await fetch(url);
        const posts = await results.json();
        this.setState({ posts: posts });
        console.log(posts);
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>List of Posts</h1>
                {posts.map(post => <div key={post.id}>{post.title}</div>)}
            </div>
        );
    }
}

export default PostList;