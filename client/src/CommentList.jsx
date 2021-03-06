import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);
    const fetchComments = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );
        setComments(res.data);
    };

    const renderComments = comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
    ));

    return <ul>{renderComments}</ul>;
};

export default CommentList;
