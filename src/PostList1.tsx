
import { useAREAS } from "./api/areas/queries.ts";
import { Areas } from "./api/areas/types";

const PostList1 = () => {
    const areasQuery = useAREAS();

    if (areasQuery.status === "loading") return <h1>Loading...</h1>;
    if (areasQuery.status === "error") return <h1>Error: {areasQuery.error.message}</h1>;

    return (
        <div>
            <h1>Posts List 1</h1>
            <ol>
                {Array.isArray (areasQuery.data) && areasQuery.data?.map((post: Areas) => (
                    <li key={post.id}>{post.nazwa}</li>
                ))}
            </ol>
        </div>
    );
};

export default PostList1;
