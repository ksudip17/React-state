
import { useState } from "react";




export default function CommentsForm({addNewComment}) {
    let[formData , setFormData] = useState({
        username : "",
        remarks : "",
        rating : "",
    });

    


    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        });
    };


    let handleChange = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();

        setFormData ({
            username : "",
            remarks : "",
            rating : "",
        });
    };

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleChange}>
                <label htmlFor="username">Username</label>
                <input 
                placeholder="username" 
                type="text" 
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                name="username"/>

                <br /><br /><br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea 
                value={formData.remarks} 
                placeholder="add few remarks" 
                onChange={handleInputChange}
                id="remarks"
                name="remarks">
                </textarea>
                <br /><br /><br /><br />

                <label htmlFor="rating">Ratings</label>
                <input placeholder="rating" 
                type="number"
                 min={1} 
                 max={5} 
                 value={formData.rating}
                 onChange={handleInputChange}
                 id="rating"
                 name="rating"/>

                <br /><br /><br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}