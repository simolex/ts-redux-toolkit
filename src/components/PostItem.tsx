import { FC, MouseEvent } from "react";
import { Post } from "../model/Post";

interface PostItemProps {
    post: Post;
    remove: (post: Post) => void;
    update: (post: Post) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
    const handleRemove = (e: MouseEvent) => {
        e.stopPropagation();
        remove(post);
    };

    const handleUpdate = (e: MouseEvent) => {
        const title = prompt() || "";
        update({ ...post, title });
    };
    return (
        <div className='post' onClick={handleUpdate}>
            {post.id} - {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;
