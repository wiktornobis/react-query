
import { useQuery, UseQueryResult } from "react-query";
import getPosts from "./api/posts";

type Post = {
    id: number | string;
    title: string;
};

const PostList1 = () => {
    const postQuery: UseQueryResult<Post[], Error> = useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: getPosts,
    });

    if (postQuery.status === "loading") return <h1>Loading...</h1>;
    if (postQuery.status === "error") {
        return <h1>{postQuery.error.message}</h1>;
    }

    return (
        <div>
            <h1>Posts List 1</h1>
            <ol>
                {postQuery.data?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    );
};

export default PostList1;
