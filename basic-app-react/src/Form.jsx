function handleForSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
}


export default function submitForm() {
    return(
        <form>
            <input placeholder="type something" />
            <button onClick={handleForSubmit}>Submit</button>
        </form>
    );
}