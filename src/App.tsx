import './App.css'

import {useQuery, useMutation } from "react-query";

interface Post {
    id: number;
    title: string;
}

const POSTS: Post[] = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
];

function App() {
    const postsQuery = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: () => wait(1000).then(() => [...POSTS]),
    })

    if(postsQuery.isLoading) return <h1>Loading...</h1>
    if(postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

    return (
        <div>
            {postsQuery.data?.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}

function wait(duration: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, duration))
};

export default App
