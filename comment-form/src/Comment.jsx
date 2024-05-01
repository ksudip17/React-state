import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment () {

    let[comments , setComments] = useState([{
        username : "@sk",
        remarks : "great job",
        rating  : 5,
    }])

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }

    return (
        <>
        <div>
            <h3>All Comments!</h3>
            {comments.map((comment , idx) => (

                <div className="comments" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>( rating = {comment.rating})</span>
                <p> -{comment.username}</p>

            </div>

            ))}
            
        </div>
        <hr />
        <CommentsForm addNewComment={addNewComment}/>
        </>
    );
}