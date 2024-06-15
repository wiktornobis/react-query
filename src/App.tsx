import './App.css';
import { useQuery, useMutation, useQueryClient } from 'react-query';

interface Post {
    id: number | string;
    title: string;
}

const POSTS: Post[] = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
];

const wait = (duration: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, duration));
};

const addPost = async (title: string): Promise<void> => {
    await wait(1000);
    POSTS.push({ id: crypto.randomUUID(), title });
};


const App = () => {
    const queryClient = useQueryClient();
    const postsQuery = useQuery<Post[]>({
        queryKey: ["posts"],
        queryFn: () => wait(1000).then(() => [...POSTS]),
    });

    const newPostMutations = useMutation<void, Error, string>({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
        onError: (error) => {
            console.error("Error adding post:", error);
        }
    });

    if (postsQuery.isLoading) return <h1>Loading...</h1>;
    if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

    return (
        <div>
            {postsQuery.data?.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
            <button disabled={newPostMutations.isLoading} onClick={() => newPostMutations.mutate("New Post")}>
                Add new
            </button>
        </div>
    );
};



export default App;
