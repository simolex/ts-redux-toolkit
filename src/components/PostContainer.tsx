import { useEffect, useState } from "react";
import { Post } from "../model/Post";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(20);
    const { data: posts, isLoading, error, refetch } = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({
            title,
            body: title,
        } as Post);
    };
    const handleRemove = (post: Post) => {
        deletePost(post);
    };
    const handleUpdate = (post: Post) => {
        updatePost(post);
    };

    return (
        <div className='post_list'>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1> {"!!!JIB<RF!!!"}</h1>}
            {posts?.map((post) => (
                <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostContainer;
