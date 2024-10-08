function handleForm(event) {
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form(){
    return(
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Write something!"/>
            <button>Submit</button>
        </form>
    )
}